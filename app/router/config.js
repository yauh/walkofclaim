Router.configure( {
  layoutTemplate: 'tabLayout'
} );

Meteor.startup( function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set( 'platformOverride', location.queryObject.platformOverride );
    }
  }
} );

//TODO: Using ensureSignedIn throws a warning
AccountsTemplates.configureRoute( 'ensureSignedIn', {
  template: 'welcome'
} );

// Route dispatch never rendered. Did you forget to call this.next() in an onBeforeAction?
Router.plugin( 'ensureSignedIn', {
  only: [ 'home', 'profile' ]
} );

Router.plugin( 'dataNotFound', {
  notFoundTemplate: 'home'
} );

Router.onAfterAction(function() {
  // always start by resetting scroll to top of the page
  $(window).scrollTop(0);
  var hash=this.params.hash;
  // if there is a hash in the URL, handle it
  if (hash) {
    // now this is important : Tracker.afterFlush ensures that iron-router
    // rendering process has finished inserting the current route template
    // into DOM so we can manipulate it via jQuery, if you skip this part
    // the HTML element you want to scroll to might not yet be present in
    // the DOM (this is probably why your code fails in the first place)
    Tracker.afterFlush(function() {
      var element=$("#"+hash);
      var scrollTop = element.offset().top;
      $("html,body").animate({
        scrollTop: scrollTop
      });
    });
  }
});