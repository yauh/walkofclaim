finishWalkDialog = function (walk) {
  Meteor.clearInterval( countDownHandle );
  var distance;
  var area;
  var unit;
  if (Meteor.user() && Meteor.user().profile.settings.useImperial) {
    miles = walk.distance * 0.6214;
    sqmiles = walk.area * 0.6214;
    area = sqmiles.toFixed( 2 );
    unit = 'mi';
    distance = miles.toFixed( 2 );
  }
  else {
    distance = walk.distance.toFixed( 2 );
    area = walk.area.toFixed( 2 );
    unit = 'km';
  }
  var durationInS = moment().diff( walk.begin, 'seconds' );
  var duration = (new Date( durationInS * 1000 )).toUTCString().match( /(\d\d:\d\d:\d\d)/ )[ 0 ];

  IonPopup.confirm( {
    title: 'Finish your claim',
    template: 'You walked ' + distance + ' ' + unit + ' in ' + duration + '.<br/>Do you want to claim an area of ' + area + ' ' + unit + '<sup>2</sup>?',
    okText: 'Claim this land',
    cancelText: 'Keep walking',
    onOk: function () {
      if (Meteor.isCordova) {
        window.plugins.insomnia.allowSleepAgain();
      }

      Meteor.call( 'finishWalk', Session.get( 'walkId' ), function (error, result) {
        if (error) {
          console.log( 'you should handle this finishing error', error );
          alert( 'Oh no, an error occured', error );
        }
        else {
          console.log( 'finished walk with result', result );
        }

      } );

    }
  } );
};