Template.highscoresLifetimeDistance.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.lifetime.distance": -1 } } );
  }
} );