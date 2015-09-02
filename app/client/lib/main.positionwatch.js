var currentPosition;
var previousPosition;

Tracker.autorun( function () {
  currentPosition = Geolocation.currentLocation();

  if (!currentPosition) {
    return;
  }
  else if (!previousPosition) { // avoid previousPosition being null
    Session.set( 'previousLatlng', { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude } );
    previousPosition = currentPosition;
  }

  // only needed for development when providing location in a browser
  if (Meteor.isCordova) {
    var accuracy = Geolocation.currentLocation().coords.accuracy;
    if (accuracy < 11) {
      accuracy = 11; // crude fix to never allow more precision than 11m
    }
  }
  else {
    var accuracy = 11;
  }

  if (currentPosition.coords.latitude < -90 || currentPosition.coords.latitude > 90) {
    console.log( 'invalid latitude:', currentPosition.coords.latitude );
    return;
  }
  else if (currentPosition.coords.longitude < -180 || currentPosition.coords.longitude > 180) {
    console.log( 'invalid longitude:', currentPosition.coords.longitude );
    return;
  }
  // current position to a session variable for showing icon on the map
  Session.set( 'currentLatlng', { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude } );

  // if player is walking subscribe to the current walk
  if (Session.get( 'walkId' )) {
    subs.subscribe( 'walkById', Session.get( 'walkId' ) );


    countDownHandle = Meteor.setInterval( (function () {
      Session.set( 'secondsRemaining', moment( Session.get( 'walkDeadline' ) ).diff( moment(), 'seconds' ) );
      if (Session.get( 'secondsRemaining' ) <= 0) {
        timesUpDialog();
        resetSessionVars();
        Meteor.clearInterval( countDownHandle );
      }
    }), 1000 );

    if (isDistanceGreater( positionToPoint( currentPosition ), positionToPoint( previousPosition ), accuracy )) {

      // save the coordinates to a collection
      Meteor.call( 'updateWalk', Session.get( 'walkId' ), Session.get( 'currentLatlng' ) );

      // enable claiming if the player is near their starting position and has at least 4 waypoints
      var waypoints = WalksCollection.findOne( Session.get( 'walkId' ) ).waypoints.features.length;
      //console.log( 'got', waypoints, 'waypoints and close', isDistanceSmaller( positionToPoint( currentPosition ), latlngObjToPoint( Session.get( 'startLatlng' ) ), 15 ) );
      if (isDistanceSmaller( positionToPoint( currentPosition ), latlngObjToPoint( Session.get( 'startLatlng' ) ), 22 ) && waypoints > 4) {
        Session.set( 'playerStatus', 'home' );
      }
      else {
        Session.set( 'playerStatus', 'walking' );
      }
      previousPosition = currentPosition;
    }

  }
  
} );

