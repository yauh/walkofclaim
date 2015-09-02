Router.route( '/', {
  name: 'home',
  waitOn: function () {
    return subs.subscribe( 'profile' );
  }
} );
Router.route( '/about', 'about', { name: 'about' } );
Router.route( '/debug', { name: 'debug' } );
Router.route( '/highscores', {
  name: 'highscores',
  waitOn: function () {
    return [
      subs.subscribe( 'myScores' )
    ];
  }
} );
Router.route( '/highscores/claims', {
  name: 'highscoresCurrentClaims',
  waitOn: function () {
    return [
      subs.subscribe( 'topCurrentClaims' )
    ];
  }
} );
Router.route( '/highscores/area', {
  name: 'highscoresCurrentArea',
  waitOn: function () {
    return [
      subs.subscribe( 'topCurrentArea' )
    ];
  }
} );
Router.route( '/highscores/distance', {
  name: 'highscoresLifetimeDistance',
  waitOn: function () {
    return [
      subs.subscribe( 'topLifetimeDistance' )
    ];
  }
} );
Router.route( '/highscores/duration', {
  name: 'highscoresLifetimeDuration',
  waitOn: function () {
    return [
      subs.subscribe( 'topLifetimeDuration' )
    ];
  }
} );
Router.route( '/highscores/destroyed', {
  name: 'highscoresDestroyedClaims',
  waitOn: function () {
    return [
      subs.subscribe( 'topDestroyedClaims' ),
    ];
  }
} );
Router.route( '/highscores/stolen', {
  name: 'highscoresStolenArea',
  waitOn: function () {
    return [
      subs.subscribe( 'topStolenArea' )
    ];
  }
} );
Router.route( '/highscores/avgspeed', {
  name: 'highscoresLifetimeAvgSpeed',
  waitOn: function () {
    return [
      subs.subscribe( 'topLifetimeAvgSpeed' )
    ];
  }
} );
Router.route( '/highscores/avgsize', {
  name: 'highscoresLifetimeAvgSize',
  waitOn: function () {
    return [
      subs.subscribe( 'topLifetimeAvgSize' )
    ];
  }
} );

Router.route( '/login', { name: 'login' } );
Router.route( '/profile', { name: 'profile' } );
Router.route( '/register', { name: 'register' } );
Router.route( '/settings', { name: 'settings' } );
Router.route( '/welcome', { name: 'welcome' } );
Router.route( '/privacy', { name: 'privacy' } );
Router.route( '/purchases', { name: 'purchases' } );
Router.route( '/terms', { name: 'terms' } );