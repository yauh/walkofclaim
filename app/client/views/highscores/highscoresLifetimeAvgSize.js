Template.highscoresLifetimeAvgSize.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.lifetime.avgSize": -1 } } );
  }
} );