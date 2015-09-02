// claim is set to false
// when a new claim is started it is set to the starting position latlng

// Session.get('claim')
Session.setDefault( 'walkId', false );
Session.setDefault( 'startLatlng', false );
Session.setDefault( 'mapVisible', false );
Session.setDefault( 'zoomLevel', 16 );
Session.setDefault( 'walkDeadline', false );
Session.setDefault( 'secondsRemaining', false );

// Session.get('currentLatLng') contains an object
// {lat: 1, lng: 1}
Session.setDefault( 'currentLatlng', { lat: 0, lng: 0 } );
Session.setDefault( 'previousLatlng', { lat: 0, lng: 0 } );
Session.setDefault( 'previousCenter', { lat: 0, lng: 0 } );

// Session.get('playerStatus') returns a String:
// walking  - ongoing claim
// home     - claim that can be finished
// idle     - no claim in progress
Session.setDefault( 'playerStatus', 'idle' );

resetSessionVars = function () {
  Session.set( 'walkId', false );
  Session.set( 'startLatlng', false );
  Session.set( 'playerStatus', 'idle' );
  Session.set( 'walkDeadline', false );
  Session.set( 'secondsRemaining', false );
};
printSessionValues = function () {
  console.log( 'walkId', Session.get( 'walkId' ) );
  console.log( 'startLatlng', Session.get( 'startLatlng' ) );
  console.log( 'zoomLevel', Session.get( 'zoomLevel' ) );
  console.log( 'currentLatlng', Session.get( 'currentLatlng' ) );
  console.log( 'previousCenter', Session.get( 'previousCenter' ) );
  console.log( 'playerStatus', Session.get( 'playerStatus' ) );
  console.log( 'walkDeadline', Session.get( 'walkDeadline' ) );
  console.log( 'secondsRemaining', Session.get( 'secondsRemaining' ) );
};