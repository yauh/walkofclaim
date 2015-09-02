Template.debug.helpers( {
  debug: function () {
    //return Session.get( 'position' );
    return Geolocation.currentLocation();
  },
  buildNumber: function () {
    return Meteor.settings.public.buildNumber;
  },
  error: function () {
    return Geolocation.error();
  },
  playerStatus: function () {
    return Session.get( 'playerStatus' );
  },
  connection: function () {
    var connectionDetails = {};
    connectionDetails.url = Meteor.absoluteUrl();
    connectionDetails.status = Meteor.status().status;
    return connectionDetails;
  }
} );

Template.debug.events( {
  'click #idle': function (evt) {
    evt.stopPropagation();
    resetSessionVars();
    subs.clear();
    window.plugins.insomnia.allowSleepAgain();
  }
} );

