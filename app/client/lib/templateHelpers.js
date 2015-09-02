Template.registerHelper( 'MathFloor', function (value) {
  return Math.floor( value );
} );

Template.registerHelper( 'secondsToHms', function (seconds) {
  return (new Date( seconds * 1000 )).toUTCString().match( /(\d\d:\d\d:\d\d)/ )[ 0 ];
} );

Template.registerHelper( 'baseUnit', function () {
  var baseUnit;
  if (Meteor.user() && Meteor.user().profile.settings.useImperial) {
    baseUnit = 'mi';
  }
  else {
    baseUnit = 'km';
  }
  return baseUnit;
} );

Template.registerHelper( 'metersToKilometers', function (meters) {
  var km = meters / 1000;
  return km;
} );

Template.registerHelper( 'formatWithSystem', function (input) {
  return formatLength( input );
} );

Template.registerHelper( 'remainingTime', function () {
  if (Session.equals( 'secondsRemaining',false )) {
    return false;
  }
  else if (Session.get( 'secondsRemaining' ) < 60) {
    return '- ' + Session.get( 'secondsRemaining' ) + 's left';
  }
  else if (Session.get( 'secondsRemaining' ) > 60) {
    return '- ' + Math.floor( Session.get( 'secondsRemaining' ) / 60 ) + 'm left';
  }
} );
