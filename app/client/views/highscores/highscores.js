// TODO: Should use a single template and reactive-var to determine which top 10 to show
Template.highscores.helpers( {
  myScores: function () {
    return HighScoresCollection.findOne( { _id: Meteor.userId() } );
  }
} );
