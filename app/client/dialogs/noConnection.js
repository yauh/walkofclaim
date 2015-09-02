noConnectionDialog = function (claim) {
  IonPopup.alert( {
    title: 'No connection',
    template: 'You are not connected to the game server. Please make sure that you are connected to the internet and try again.',
    okText: 'I will try again later'

  } );
};