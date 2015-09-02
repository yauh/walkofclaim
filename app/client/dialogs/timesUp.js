timesUpDialog = function () {
  IonPopup.alert( {
    title: 'Time\'s up!',
    template: 'Oh no, you took too long! 60 minutes are over.<br />You lose this claim.',
    okText: 'Shucks',
    onOk: function () {
      console.log( 'walk over' );
    }
  } );
};