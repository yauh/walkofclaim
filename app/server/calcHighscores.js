calcHighScores = function (userId) {
  console.log( 'calcHighScores', userId );
  var selectorLifetime = { $match: { userId: userId, stats: { $exists: true } } };
  var selectorCurrent = { $match: { userId: userId } };
  var pipelineLifetime = {
    $group: {
      _id: "$userId",
      duration: { $sum: "$stats.duration" }, // lifetime stats
      distance: { $sum: "$stats.distance" }, // lifetime stats
      area: { $sum: "$stats.area" }, // lifetime stats
      avgSpeed: { $avg: "$stats.speed" }, // lifetime stats
      walks: { $sum: 1 }
    }
  };
  var pipelineCurrent = {
    $group: {
      _id: "$userId",
      stolenArea: { $sum: "$stats.stolenArea" }, // current stats
      claimedArea: { $sum: "$stats.area" }, // current stats
      claims: { $sum: 1 }
    }
  };
  var lifetimeScores = WalksCollection.aggregate( [selectorLifetime, pipelineLifetime] );
  var currentScores = ClaimsCollection.aggregate( [selectorCurrent, pipelineCurrent] );
  var destroyed = ClaimsCollection.find({destroyedBy: userId }).count();
  var playerAvatar;
  var playerInfo = Meteor.users.findOne(
    { _id: userId },
    {
      fields: {
        "profile.settings.name": 1,
        "services.facebook.id": 1,
        "services.twitter.profile_image_url_https": 1,
        "profile.settings.showImage": 1
      }
    } );

  if (playerInfo.services.facebook) {
    var facebookId = playerInfo.services.facebook.id;
    playerAvatar = 'https://graph.facebook.com/' + facebookId + '/picture';
  }
  else if (playerInfo.services.twitter) {
    playerAvatar = playerInfo.services.twitter.profile_image_url_https;
  }
  else {
    console.log( 'no image found' );
    playerAvatar = '/icons/defaultPlayer.jpg';
  }

  var playerStats = {
    lifetime: {
      duration: lifetimeScores[0].duration,
      distance: lifetimeScores[0].distance,
      area: lifetimeScores[0].area,
      avgSpeed: lifetimeScores[0].avgSpeed,
      walks: lifetimeScores[0].walks,
      avgSize: lifetimeScores[0].area / currentScores[0].claims
    },
    current: {
      stolenArea: currentScores[0].stolenArea,
      area: currentScores[0].claimedArea,
      claims: currentScores[0].claims,
      destroyedClaims: destroyed
    }
  };

  var highscoreEntry = {
    name: playerInfo.profile.settings.name,
    showImage: playerInfo.profile.settings.showImage,
    avatar: playerAvatar
  };

  highscoreEntry.stats = playerStats;
  //console.log( 'upserting highscore', highscoreEntry );

  HighScoresCollection.upsert( { _id: userId }, highscoreEntry );
  console.log( 'updating player stats', userId );
  Meteor.users.update( { _id: userId }, { $set: { "profile.stats": playerStats } } );

};

