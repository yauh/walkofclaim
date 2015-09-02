deleteAccountDialog = function () {

  IonPopup.confirm( {
    title: 'Delete your account',
    template: 'Are you sure you want to delete your account? Doing so means that all data that connects your claims to you will be wiped from our systems.',
    okText: 'Delete my account',
    cancelText: 'Keep playing',
    onOk: function () {

      Meteor.call( 'deleteAccount', function (error, result) {
        if (error) {
          console.log( 'you should handle this account deletion error', error );
        }
        else {
          console.log( 'deleted your account' );
        }

      } );
      IonPopup.close();
    }
  } );
};