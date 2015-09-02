// fixtures for scores

Meteor.startup( function () {
  if (HighScoresCollection.find().count() < 2) {
    var scoreFixtures = [
      /* 1 */
      {
        "_id": "dummy01",
        "name": "Wyatt Mills",
        "showImage": null,
        "avatar": "https://graph.facebook.com/10206505220334660/picture",
        "stats": {
          "lifetime": {
            "duration": 411,
            "distance": 0.4995363201930781,
            "area": 0.1157577180919999,
            "avgSpeed": 3.5,
            "walks": 1,
            "avgSize": 0.1157577180919999
          },
          "current": {
            "stolenArea": 0,
            "area": 0.1157577180919999,
            "claims": 1,
            "destroyedClaims": 0
          }
        }
      },
      {
        "_id": "dummy02",
        "name": "Calamity Jane",
        "showImage": false,
        "avatar": "/icons/defaultPlayer.jpg",
        "stats": {
          "lifetime": {
            "duration": 1297,
            "distance": 1.3747153670352035,
            "area": 0.2874628655487229,
            "avgSpeed": 3.8,
            "walks": 3,
            "avgSize": 0.0958209551829076
          },
          "current": {
            "stolenArea": 0,
            "area": 0.1782635597447840,
            "claims": 3,
            "destroyedClaims": 0
          }
        }
      },
      {
        "_id": "dummy03",
        "name": "Jeff Kidder",
        "showImage": false,
        "avatar": "/icons/defaultPlayer.jpg",
        "stats": {
          "lifetime": {
            "duration": 791,
            "distance": 0.8229250000068057,
            "area": 0.0245783459597449,
            "avgSpeed": 3.72,
            "walks": 2,
            "avgSize": 0.0122891729798724
          },
          "current": {
            "stolenArea": 0.0100000000000000,
            "area": 0.0223409258440717,
            "claims": 2,
            "destroyedClaims": 0
          }
        }
      },
      {
        "_id": "dummy04",
        "name": "Harvey Logan",
        "showImage": false,
        "avatar": "/icons/defaultPlayer.jpg",
        "stats": {
          "lifetime": {
            "duration": 308,
            "distance": 0.3610002716983604,
            "area": 0.0771735042755159,
            "avgSpeed": 4.2,
            "walks": 1,
            "avgSize": 0.0771735042755159
          },
          "current": {
            "stolenArea": 0,
            "area": 0,
            "claims": 1,
            "destroyedClaims": 0
          }
        }
      },
      {
        "_id": "dummy05",
        "name": "Dan Bogan",
        "showImage": false,
        "avatar": "https://graph.facebook.com/10206505220334660/picture",
        "stats": {
          "lifetime": {
            "duration": 15466,
            "distance": 11.6969976754322733,
            "area": 17.6905697672000954,
            "avgSpeed": 2.7,
            "walks": 3,
            "avgSize": 5.8968565890666982
          },
          "current": {
            "stolenArea": 0,
            "area": 12.5903542439378899,
            "claims": 3,
            "destroyedClaims": 1
          }
        }
      },
      {
        "_id": "dummy06",
        "name": "Cattle Annie",
        "showImage": false,
        "avatar": "/icons/defaultPlayer.jpg",
        "stats": {
          "lifetime": {
            "duration": 795,
            "distance": 5.7132641097436636,
            "area": 1.5815768222555664,
            "avgSpeed": 2.61,
            "walks": 2,
            "avgSize": 0.7907884111277832
          },
          "current": {
            "stolenArea": 0,
            "area": 0.7365182764615196,
            "claims": 2,
            "destroyedClaims": 0
          }
        }
      },
      {
        "_id": "dummy07",
        "name": "Jack McCall",
        "showImage": false,
        "avatar": "https://pbs.twimg.com/profile_images/610408622774984704/FhCVJPrR_normal.jpg",
        "stats": {
          "lifetime": {
            "duration": 11433,
            "distance": 10.0726785228685358,
            "area": 19.3344592363363752,
            "avgSpeed": 3.18,
            "walks": 3,
            "avgSize": 6.4448197454454581
          },
          "current": {
            "stolenArea": 0.0500000000000000,
            "area": 18.2547463366047538,
            "claims": 3,
            "destroyedClaims": 1
          }
        }
      },
      {
        "_id": "dummy08",
        "name": "Johnny Ringo",
        "showImage": false,
        "avatar": "/icons/defaultPlayer.jpg",
        "stats": {
          "lifetime": {
            "duration": 8274,
            "distance": 8.7847845752100877,
            "area": 3.0956066231471779,
            "avgSpeed": 3.82,
            "walks": 10,
            "avgSize": 0.3095606623147178
          },
          "current": {
            "stolenArea": 0.2800000000000000,
            "area": 2.5651075535756833,
            "claims": 10,
            "destroyedClaims": 0
          }
        }
      },
      {
        "_id": "dummy09",
        "name": "Shirley Morrison",
        "showImage": false,
        "avatar": "/icons/defaultPlayer.jpg",
        "stats": {
          "lifetime": {
            "duration": 750,
            "distance": 0.7856464804827811,
            "area": 0.3129916853896146,
            "avgSpeed": 3.74,
            "walks": 2,
            "avgSize": 0.1564958426948073
          },
          "current": {
            "stolenArea": 0.3100000000000000,
            "area": 0.3129916853896146,
            "claims": 2,
            "destroyedClaims": 0
          }
        }
      },
      {
        "_id": "dummy10",
        "name": "Dan Tucker",
        "showImage": false,
        "avatar": "/icons/defaultPlayer.jpg",
        "stats": {
          "lifetime": {
            "duration": 1991,
            "distance": 2.2926681540104670,
            "area": 1.1815052662269907,
            "avgSpeed": 4.14,
            "walks": 3,
            "avgSize": 0.3938350887423303
          },
          "current": {
            "stolenArea": 0.2000000000000000,
            "area": 1.1815052662269907,
            "claims": 3,
            "destroyedClaims": 1
          }
        }
      }

    ];

    _.forEach( scoreFixtures, function (score) {
      //Updates the walks and inserts it if it does not exist
      HighScoresCollection.upsert( { _id: score._id }, score );
    } );

    console.log( '######### inserted score fixtures' );
  }

} );
