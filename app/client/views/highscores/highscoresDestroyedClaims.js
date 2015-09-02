Template.highscoresDestroyedClaims.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.current.destroyedClaims": -1 } } );
  }
} );