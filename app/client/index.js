Template.welcome.onRendered( function () {
  Meteor.setTimeout( function () {
    $( '#top' ).focus()
  }, 10 );
} );