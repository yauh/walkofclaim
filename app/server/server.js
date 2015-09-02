// integrate accounts
// https://github.com/leecrossley/cordova-plugin-game-center
// https://github.com/ptgamr/cordova-google-play-game
Meteor.startup( function () {
  console.log( 'Running at root_url', __meteor_runtime_config__.ROOT_URL );
  archiveOldWalks();
  // ensure indices are set up properly
  ClaimsCollection._ensureIndex( { 'geojson.geometry': '2dsphere' } );
  ClaimsCollection._ensureIndex( { 'userId': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.current.area': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.current.claims': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.current.destroyedClaims': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.current.stolenArea': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.lifetime.area': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.lifetime.avgSize': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.lifetime.avgSpeed': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.lifetime.distance': 1 } );
  HighScoresCollection._ensureIndex( { 'stats.lifetime.duration': 1 } );
  WalksCollection._ensureIndex( { 'trail.geometry': '2dsphere' } );
  WalksCollection._ensureIndex( { 'userId': 1 } );
} );

Meteor.startup( function () {
  // Add Facebook configuration entry
  ServiceConfiguration.configurations.upsert(
    { 'service': 'facebook' },
    {
      $set: {
        'appId': Meteor.settings.facebook.appId,
        'secret': Meteor.settings.facebook.secret,
        'loginStyle': 'redirect'
      }
    }
  );
  // Add Twitter configuration entry
  ServiceConfiguration.configurations.upsert(
    { 'service': 'twitter' },
    {
      $set: {
        'consumerKey': Meteor.settings.twitter.consumerKey,
        'secret': Meteor.settings.twitter.secret,
        'loginStyle': 'redirect'
      }
    }
  );

} );

Meteor.startup( function () {
  smtp = {
    username: 'changeme',
    password: 'changeme',
    server: 'changeme',
    port: 587
  };
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent( smtp.username ) + ':' + encodeURIComponent( smtp.password ) + '@' + encodeURIComponent( smtp.server ) + ':' + smtp.port;
} );

Accounts.emailTemplates.siteName = 'Walk of Claim';
Accounts.emailTemplates.from = 'Walk of Claim <changeme>';
