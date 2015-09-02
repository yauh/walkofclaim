Meteor.publish( 'topCurrentArea', function () {
  var topCurrentArea = HighScoresCollection.find( {}, { sort: { 'stats.current.area': -1 }, limit: 10 } );
  return topCurrentArea;
} );

Meteor.publish( 'topCurrentClaims', function () {
  var topCurrentClaims = HighScoresCollection.find( {}, { sort: { 'stats.current.claims': -1 }, limit: 10 } );
  return topCurrentClaims;
} );

Meteor.publish( 'topStolenArea', function () {
  var topStolenArea = HighScoresCollection.find( {}, { sort: { 'stats.current.stolenArea': -1 }, limit: 10 } );
  return topStolenArea;
} );

Meteor.publish( 'topDestroyedClaims', function () {
  var topStolenArea = HighScoresCollection.find( {}, { sort: { 'stats.current.destroyedClaims': -1 }, limit: 10 } );
  return topStolenArea;
} );

Meteor.publish( 'topLifetimeArea', function () {
  var topLifetimeArea = HighScoresCollection.find( {}, { sort: { 'stats.lifetime.area': -1 }, limit: 10 } );
  return topLifetimeArea;
} );

Meteor.publish( 'topLifetimeDuration', function () {
  var topLifetimeDuration = HighScoresCollection.find( {}, { sort: { 'stats.lifetime.duration': -1 }, limit: 10 } );
  return topLifetimeDuration;
} );

Meteor.publish( 'topLifetimeDistance', function () {
  var topLifetimeDistance = HighScoresCollection.find( {}, { sort: { 'stats.lifetime.distance': -1 }, limit: 10 } );
  return topLifetimeDistance;
} );

Meteor.publish( 'topLifetimeAvgSpeed', function () {
  var topLifetimeAvgSpeed = HighScoresCollection.find( {}, { sort: { 'stats.lifetime.avgSpeed': -1 }, limit: 10 } );
  return topLifetimeAvgSpeed;
} );

Meteor.publish( 'topLifetimeAvgSize', function () {
  var topLifetimeAvgSpeed = HighScoresCollection.find( {}, { sort: { 'stats.lifetime.avgSize': -1 }, limit: 10 } );
  return topLifetimeAvgSpeed;
} );

Meteor.publish( 'myScores', function () {
  var self = this;
  HighScoresCollection.find( { _id: this.userId } ).forEach( function (score) {
    var position = {};
    position.currentArea = HighScoresCollection.find( { 'stats.current.area': { '$gt': score.stats.current.area } } ).count() + 1;
    position.currentClaims = HighScoresCollection.find( { 'stats.current.claims': { '$gt': score.stats.current.claims } } ).count() + 1;
    position.currentStolenArea = HighScoresCollection.find( { 'stats.current.stolenArea': { '$gt': score.stats.current.stolenArea } } ).count() + 1;
    position.destroyedClaims = HighScoresCollection.find( { 'stats.current.destroyedClaims': { '$gt': score.stats.current.destroyedClaims } } ).count() + 1;
    position.lifetimeArea = HighScoresCollection.find( { 'stats.lifetime.area': { '$gt': score.stats.lifetime.area } } ).count() + 1;
    position.lifetimeDistance = HighScoresCollection.find( { 'stats.lifetime.distance': { '$gt': score.stats.lifetime.distance } } ).count() + 1;
    position.lifetimeDuration = HighScoresCollection.find( { 'stats.lifetime.duration': { '$gt': score.stats.lifetime.duration } } ).count() + 1;
    position.lifetimeAvgSpeed = HighScoresCollection.find( { 'stats.lifetime.avgSpeed': { '$gt': score.stats.lifetime.avgSpeed } } ).count() + 1;
    position.lifetimeAvgSize = HighScoresCollection.find( { 'stats.lifetime.avgSize': { '$gt': score.stats.lifetime.avgSize } } ).count() + 1;
    position.overall = HighScoresCollection.find().count();
    score.positions = position;
    self.added( 'highscores', score._id, score );
  } );
  self.ready();
} );