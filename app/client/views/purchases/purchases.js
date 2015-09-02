Template.purchases.onCreated( function () {
  function initializeStore () {

    var products = [
      {
        id: 'de.yauh.walkofclaim.gunpowder',
        type: store.CONSUMABLE
      },
      {
        id: 'de.yauh.walkofclaim.genmaicha',
        type: store.CONSUMABLE
      },
      {
        id: 'de.yauh.walkofclaim.matcha',
        type: store.CONSUMABLE
      }
    ];

    // Let's set a pretty high verbosity level, so that we see a lot of stuff
    // in the console (reassuring us that something is happening).
    store.verbosity = store.WARNING;

    _.each( products, function (product) {
      console.log( 'registering', product.id );

      store.register( {
        id: product.id,
        type: product.type
      } );

      store.when( product.id ).loaded( function (p) {
        p.icon = 'coffee';
        IAPCollection.upsert( { _id: p.id }, p );
        console.log( 'loaded', p.id );
      } );
      store.when( product.id ).approved( function (p) {
        console.log( 'approved', p.id );
        thankyouDialog();
        p.finish();
      } );
    } );

    // When every goes as expected, it's time to celebrate!
    // The 'ready' event should be welcomed with music and fireworks,
    // go ask your boss about it! (just in case)
    store.ready( function () {
      console.log( '\\o/ STORE READY \\o/' );
    } );

    // After we've done our setup, we tell the store to do
    // it's first refresh. Nothing will happen if we do not call store.refresh()
    store.refresh( function () {
      console.log( 'refreshed store' );
    } );

  }
 initializeStore();
} );

Template.purchases.onDestroyed( function () {
  IAPCollection.remove();
});
Template.purchases.helpers( {
  products: function () {
    if (IAPCollection.find().count() === 0) {
      // somehow broken on Android I guess...
      //IonLoading.show({delay: 50});
      return [ { title: 'Waiting', price: 'the menu', icon: 'android-menu' } ];
    }
    else{
      //IonLoading.hide();
      return IAPCollection.find( {}, { sort: { 'price': 1 } } );
    }
  }
} );

Template.purchases.events( {
  'click .purchase': function (evt) {
    evt.stopPropagation();
    var productId = evt.target.id;
    if (!productId) {
      return;
    }
    console.log( 'buy me a', productId );
    buyTeaDialog( productId );
  }
} );