logoutDialog = function () {

  IonPopup.confirm( {
    title: 'Log out',
    template: 'Do you really want to log out? Usually there is no need to do so unless you plan to share your phone.',
    okText: 'Yes, I need a break',
    cancelText: 'Stay logged in',
    onOk: function () {
      console.log( 'logging out' );
      Meteor.logout();
      IonPopup.close();
    }
  } );
};