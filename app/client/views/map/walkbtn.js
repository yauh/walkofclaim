Template.walkbtn.helpers( {
  button: function () {
    var button = {};
    switch (Session.get( 'playerStatus' )) {
      case 'walking':
        button.text = 'Abandon this claim';
        button.class = 'button-assertive';
        return button;
      case 'home':
        button.text = 'Finish this claim';
        button.class = 'button-balanced';
        return button;
      case 'idle':
        button.text = 'Begin a new claim';
        button.class = 'button-positive';
        return button;
      default:
        button.text = 'I\'m a useless button';
        button.class = 'button-stable';
        return button;
    }
  }
} );

/*
 My test claim
 Meteor.call('startWalk', {lng: 7.225184440612793, lat: 51.479832741945344}, function(err,res){Session.set('walkId',res);})
 Meteor.call('updateWalk', Session.get('walkId'), {lng: 7.2345, lat: 51.4778});
 Meteor.call('updateWalk', Session.get('walkId'), {lng: 7.2355, lat: 51.4724});
 Meteor.call('updateWalk', Session.get('walkId'), {lng: 7.2250, lat: 51.4798});
 Session.set('playerStatus','home');
 */

Template.walkbtn.events( {
  'click button#btn-walk': function (evt, tpl) {
    evt.stopPropagation();

    // if there is no walk in progress yet
    if (Session.equals( 'playerStatus', 'idle' )) {
      console.log( 'starting a walk' );
      // first, clean all old walks
      Meteor.call( 'archiveMyWalks' );

      // start a walk
      Meteor.call( 'startWalk', Session.get( 'currentLatlng' ), function (error, result) {
        console.log( 'error', error, 'result', result );
        if (error) {
          console.log( 'you should handle this walkbtn error' );
        }
        else {
          Session.set( 'walkDeadline', moment().add( 60, 'm' ).toISOString() );
        }
      } );

      if (Meteor.isCordova) {
        window.plugins.insomnia.keepAwake();
      }
      startWalkDialog();

    }
    // else finish the current claim
    else if (Session.equals( 'playerStatus', 'home' )) {
      console.log( 'finishing the walk' );

      if (!Meteor.status().connected) {
        noConnectionDialog();
        return;
      }
      var currentWalk = WalksCollection.findOne( Session.get( 'walkId' ) );

      currentWalk.distance = getWalkDistance( currentWalk );
      currentWalk.area = getWalkArea( currentWalk );
      currentWalk.duration = 0;
      finishWalkDialog( currentWalk );

    }
    // else abandon the current walk
    else {
      console.log( 'abandoning the walk' );
      abandonWalkDialog();
    }
  }

} );
