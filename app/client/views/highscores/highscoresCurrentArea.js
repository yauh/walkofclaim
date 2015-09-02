Template.highscoresCurrentArea.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.current.area": -1 } } );
  }
} );