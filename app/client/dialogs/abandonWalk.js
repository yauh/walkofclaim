abandonWalkDialog = function () {
  IonPopup.confirm( {
    title: 'Abandon this claim',
    template: 'Do you really want to abandon the current claim?',
    okText: 'Abandon',
    cancelText: 'Keep walking',
    onOk: function () {
      console.log( 'claim abandoned' );
      if (Meteor.isCordova) {
        window.plugins.insomnia.allowSleepAgain();
      }
      Meteor.call( 'removeWalkById', Session.get( 'walkId' ) );
      removeStartingPointFromMap();
      resetSessionVars();

    }
  } );

};