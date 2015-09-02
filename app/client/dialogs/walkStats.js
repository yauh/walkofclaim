walkStatsDialog = function (stats) {

  Meteor.setTimeout( function () {
    IonPopup.alert( {
      title: 'Claim stats',
      template: 'Look at all your stats:' + stats,
      okText: 'Cool',
      onOk: function () {
        console.log( 'stats ack\'d' );
      }
    } )
  }, 500 );
};