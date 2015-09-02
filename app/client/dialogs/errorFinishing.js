errorFinishingDialog = function (walk) {
  console.log( 'errorFinishingDialog' );
  IonPopup.confirm( {
    title: 'Could not save',
    template: 'You claim was not saved <br />Would you like to try again?',
    okText: 'Try again',
    cancelText: 'Abandon the claim',
    onOk: function () {
      console.log( 'trying again to claim' );
      if (Meteor.isCordova) {
        window.plugins.insomnia.allowSleepAgain();
      }

      Meteor.call( 'finishWalk', Session.get( 'walkId' ), function (error, result) {
        if (error) {
          console.log( 'you should handle this walk finishing error' );
          errorFinishingDialog( walk );
        }
        else {
          Session.set( 'playerStatus', 'idle' );
          Meteor.call( 'archiveWalkById', Session.get( 'walkId' ) );
          removeStartingPointFromMap();
          resetSessionVars();
        }
      } );

    }
  } );
};