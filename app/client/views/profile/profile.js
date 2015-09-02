Template.profile.events( {
  'click #logout': function (evt) {
    evt.stopPropagation();
    logoutDialog();

  },
  'click #delete-account': function (evt, tpl) {
    evt.stopPropagation();
    deleteAccountDialog();
  }
} );