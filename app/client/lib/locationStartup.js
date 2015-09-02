Meteor.startup( function () {
  console.log( '######### BUILD: ' + Meteor.settings.public.buildNumber + ' #########' );
  console.log( '######### SERVER: ' + Meteor.absoluteUrl() + ' (' + Meteor.status().status + ') #########' );
  currentPosition = Geolocation.currentLocation();
} );