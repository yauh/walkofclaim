Meteor.methods( {
  'claimLand': function (walk) {
    console.log( '*** Method saveClaim' );
    check( walk, {
      _id: String,
      claim: Object,
      stats: Object,
      userId: String,
      begin: String,
      end: String
    } );
    WalksCollection.update( walk._id, { $set: { archived: true } } );
    if (!isValidGeojson( walk.claim )) {
      console.log( 'not valid geojson, bye' );
      return;
    }
    var claim = walk;
    claim.geojson = walk.claim;
    delete claim.claim;

    // overlapping claims - the stealing game
    var overlappingClaims = ClaimsCollection.find( {
      'geojson.geometry': {
        '$geoIntersects': { '$geometry': claim.geojson.geometry }
      }, destroyed: { $not: { $eq: true } }
    } ); // gather all affected claims
    var affectedUsers = [ Meteor.userId() ]; // gather player ids of affected claims
    var stolenArea = 0;


    overlappingClaims.forEach( function (overlappingClaim) {
      affectedUsers.push( overlappingClaim.userId );

      var areaBefore = getAreaInSqKm( overlappingClaim.geojson );

      var clippedArea = turf.erase( overlappingClaim.geojson, claim.geojson );
      if (clippedArea === undefined) {
        console.log( 'claim destroyed' );
        overlappingClaim.destroyed = true;
        overlappingClaim.destroyedBy = Meteor.userId();
        overlappingClaim.stats = {
          distance: 0,
          duration: 0,
          area: 0,
          stolenArea: 0
        };
        delete overlappingClaim.geojson;
      }
      else if (isValidGeojson( clippedArea )) {
        overlappingClaim.geojson = clippedArea;
        var areaAfter = getAreaInSqKm( overlappingClaim.geojson );
        overlappingClaim.stats.area = areaAfter;
        if (overlappingClaim.userId !== Meteor.userId()) {
          console.log( 'steal from claim ' + overlappingClaim._id );
          console.log( 'user ', overlappingClaim.userId );
          stolenArea = Number( areaBefore - areaAfter ).toFixed( 2 );
        }
      }
      ClaimsCollection.upsert( overlappingClaim._id, overlappingClaim );

    } );

    claim.stats.stolenArea = parseFloat( stolenArea );

    ClaimsCollection.insert( claim );

    // calc-highscores for all affected users
    _.uniq( affectedUsers ).forEach( function (user) {
        calcHighScores( user );
      }
    );

    return claim.stats;
  }
} );