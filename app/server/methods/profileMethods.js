Meteor.methods( {
  'updateSettings': function (settings) {
    check( settings, {
      name: String,
      useImperial: Boolean,
      mapTheme: String,
      showImage: Boolean
    } );
    Meteor.users.update( { _id: Meteor.userId() }, { $set: { 'profile.settings': settings } } );
    // make sure setting changes are propagated to high scores immediately
    HighScoresCollection.update( { _id: Meteor.userId() }, {
      $set: {
        'showImage': settings.showImage,
        'name': settings.name
      }
    } );
    // TODO: If settings want to show image, set avatar properly
  },
  'deleteAccount': function () {
    console.log( 'deleting user profile for', Meteor.userId() );
    Meteor.users.update( { _id: Meteor.userId() }, {
      $set: {
        'services': {},
        'emails': {},
        'profile.name': 'R.I.P.',
        'profile.settings.name': 'R.I.P.',
        'profile.facebookId': false,
        deleted: true
      }
    } );
    HighScoresCollection.update( { _id: Meteor.userId() }, { $set: { 'showImage': false, 'name': 'R.I.P.' } } );
  }
} );