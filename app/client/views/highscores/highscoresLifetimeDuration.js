Template.highscoresLifetimeDuration.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.lifetime.duration": -1 } } );
  }
} );