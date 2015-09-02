startWalkDialog = function () {
  IonLoading.show( {
    customTemplate: '<h3>Walk in progress</h3><p>Remember to keep your phone on while walking.</p>',
    duration: 3000
  } );
};