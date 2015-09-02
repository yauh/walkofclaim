Template.highscoresStolenArea.helpers( {
  players: function () {
    return HighScoresCollection.find( {}, { sort: { "stats.current.stolenArea": -1 } } );
  }
} );