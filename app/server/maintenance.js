archiveOldWalks = function () {
  var cutoverTimestamp = moment().subtract( 1, 'days' ).toISOString();
  console.log( 'cutover is', cutoverTimestamp );
  console.log( 'will archive', WalksCollection.find( {
    begin: { $lt: cutoverTimestamp },
    archived: { $exists: false }
  } ).count(), 'walks' );
  WalksCollection.update( {
    begin: { $lt: cutoverTimestamp },
    archived: { $exists: false }
  }, { $set: { archived: true } }, { multi: true } );
};