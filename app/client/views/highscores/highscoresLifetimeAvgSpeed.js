Template.highscoresLifetimeAvgSpeed.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.lifetime.avgSpeed": -1 } } );
  }
} );