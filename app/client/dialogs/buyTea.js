buyTeaDialog = function (itemId) {
  var product = IAPCollection.findOne( { id: itemId } );
  IonPopup.confirm( {
    title: 'That\'s so cool!',
    template: 'Will you buy me a ' + product.title + ' for ' + product.price + '?<br/>(Be patient, ordering may take a short while...)',
    okText: 'Sure, have a drink on me',
    cancelText: 'No, sorry',
    onOk: function () {
      console.log( 'Have a drink on me:', itemId );
      store.order(itemId);
    },
    onCancel: function () {
      console.log( 'Sorry - no drink for you' );
    }
  } );
};