Template.highscoresCurrentClaims.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.current.claims": -1 } } );
  }
} );