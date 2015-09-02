Meteor.methods( {
  'startWalk': function (coords) {
    check( coords, Object );
    var thisPoint = turf.point( [ coords.lng, coords.lat ], { timestamp: moment().toISOString() } );

    var walk = {};
    walk.waypoints = turf.featurecollection( [ thisPoint ] );

    //console.log( 'inserting', walk.waypoints.features[ 0 ].geometry.coordinates );

    walk.userId = this.userId;
    walk.begin = moment().toISOString();
    var id = WalksCollection.insert( walk );
    if (Meteor.isClient) {
      Session.set( 'playerStatus', 'walking' );
      Session.set( 'startLatlng', {
        lat: coords.lat,
        lng: coords.lng
      } );
      Session.set( 'walkId', id );
    }
    return id;
  },
  'updateWalk': function (walkId, coords) {
    check( walkId, String );
    check( coords, Object );
    var walkDoc = WalksCollection.findOne( walkId );
    if (this.userId === walkDoc.userId) {

      var waypoint = turf.point( [ coords.lng, coords.lat ], { timestamp: moment().toISOString() } );
      // these waypoints are used to determine the claimed land
      console.log( 'add waypoint', waypoint, 'userId', walkDoc.userId );

      WalksCollection.update( walkId, {
        $push: { 'waypoints.features': waypoint }
      } );

      // this is for drawing the trail on the map
      if (!walkDoc.trail) {
        var pointsArray = [];
        walkDoc.waypoints.features.forEach( function (point) {
          pointsArray.push( point.geometry.coordinates );
        } );
        pointsArray.push( [ coords.lng, coords.lat ] );
        var trail = turf.linestring( pointsArray, {
          userId: this.userId, owner: Meteor.users.findOne( { _id: this.userId },
            { fields: { 'profile.settings.name': 1 } } ).profile.settings.name
        } );
        WalksCollection.update( walkId, { $set: { trail: trail } } );
      }
      else {
        WalksCollection.update( walkId, {
          $push: { 'trail.geometry.coordinates': [ coords.lng, coords.lat ] }
        } );
      }
    }
  },
  'finishWalk': function (id) {
    console.log( 'Method.finishWalk' );
    check( id, String );
    if (!this.userId === WalksCollection.findOne( id ).userId) {
      console.log( 'nope, not your walk!' );
      return;
    }
    var walk = WalksCollection.findOne( { _id: id } );
    walk.end = moment().toISOString();
    WalksCollection.update( { _id: id }, { $set: { end: walk.end } } );

    console.log( 'create walk.claim' );
    // determine actual claim in form of a polygon
    walk.claim = turf.convex( walk.waypoints, 1, 'kilometers' );

    // gather all stats needed - needs full walk doc for claim and trail
    walk.stats = getWalkStats( walk );

    Meteor.call( 'saveWalkStats', id, walk.stats );

    // make doc smaller for handing over to the claimLand method
    delete walk.waypoints;
    delete walk.trail;

    walk.claim.properties = {
      userId: this.userId,
      owner: Meteor.users.findOne( { _id: this.userId },
        { fields: { 'profile.settings.name': 1 } } ).profile.settings.name
    }; // needed to identify claims on mapAomRkj5fZd2fqMTpZ

    Meteor.call( 'claimLand', walk, function (error, result) {
      if (error) {
        console.log( 'you should handle this claim land error', error.error );
      }
      else {
        console.log( 'finishWalk was executed successfully' );
        if (Meteor.isClient) {
          Session.set( 'playerStatus', 'idle' );
          Meteor.call( 'archiveWalkById', id );
          removeStartingPointFromMap();
          resetSessionVars();
        }
        return result;
      }
    } );

  },
  'saveWalkStats': function (id, stats) {
    check( id, String );
    check( stats, Object );
    if (this.userId === WalksCollection.findOne( id ).userId) {
      WalksCollection.update( { _id: id }, { $set: { stats: stats } } );
    }
  },
  'removeWalkById': function (id) {
    check( id, String );
    if (this.userId === WalksCollection.findOne( id ).userId) {
      WalksCollection.update( { _id: id }, { $set: { archived: true } } );
//      WalksCollection.remove( id ); // for now just archive
    }
  },
  'archiveWalkById': function (id) {
    check( id, String );
    if (this.userId === WalksCollection.findOne( id ).userId) {
      WalksCollection.update( { _id: id }, { $set: { archived: true } } );
    }
  },
  'archiveMyWalks': function () {
    // archive all previous walks
    console.log( 'archiving old walks' );
    WalksCollection.update( {
      userId: this.userId,
      archived: { $exists: false }
    }, { $set: { archived: true } }, { multi: true } );
  }
} );