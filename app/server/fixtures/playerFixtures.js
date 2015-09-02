// fixtures for players


Meteor.startup( function () {
  if (Meteor.users.find().count() < 2) {
    var playerFixtures = [
      {
        "_id": "xWCMyjoL5arJDsyG9",
        "services": {
          "facebook": {
            "accessToken": "CAAMT0gK8jc8BAOALybKOryn0hN2hHqBNthCf3xCHh5NuDiSnVeZCc0vx0m9GkxKAKRYIoVxn8GGFWN1DAR9ZCBnD005BZBtKs15KntTpGnZB2dscbepgNN5mo4UNZAInrT5uWm1HPYPQyZApfPlFnujjciAUhaZC8nV26dceuaRAJejUPu81wYkH9fS0WdUQuWZCQdTQGBDGZABaFEndZBhQ2Y",
            "expiresAt": 1439280689542.0,
            "id": "1416377145354445",
            "email": "stephan.hochhaus@icloud.com",
            "name": "Stefan Hochaus",
            "first_name": "Stefan",
            "last_name": "Hochaus",
            "link": "https://www.facebook.com/app_scoped_user_id/1416377145354445/",
            "gender": "male",
            "locale": "en_US"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434122219734 },
              "hashedToken": "jn6tasf7FLOK180tNXw+oaKGMm0nq0yyBhSW/qhIzdY="
            }]
          }
        },
        "profile": {
          "name": "Harrison Howard",
          "mapTheme": "Watercolor",
          "showImage": true,
          "socialSharing": false,
          "stats": {
            "lifetime": { "duration": 489, "distance": 732, "area": 6.9499999999999992895, "walks": 3 },
            "current": { "stolenArea": 0.12000000000000000944, "area": 6.6999999999999992895, "claims": 3 }
          }
        }
      }
      , {
        "_id": "qDsE5pbfTNiMvdEev",
        "services": {
          "twitter": {
            "id": "467600938",
            "screenName": "SirCharlesW727",
            "accessToken": "467600938-RzzUvAdXEu6AgxYiaUi3F6T8uMDpolO8nYsAfNfq",
            "accessTokenSecret": "fB8g844ahnPcREo2qKJEVzMbqAFc7ZsL4Tzrp6Vw4f5YY",
            "profile_image_url": "http://pbs.twimg.com/profile_images/378800000467897960/f5c91a3d4f49c755d5b446264e2e4b44_normal.jpeg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000467897960/f5c91a3d4f49c755d5b446264e2e4b44_normal.jpeg",
            "lang": "en"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434126197521 },
              "hashedToken": "eHwoaW0ktnSKAA852GxexGPzPoIFljSNMhuQjfIF/6Y="
            }, { "when": { "date": 1434126815971 }, "hashedToken": "2FObeX3fYsP8qH2aH00fiENY/7E9gbvioVw0W5bn31k=" }]
          }
        },
        "profile": {
          "name": "Charles Watson",
          "mapTheme": "Watercolor",
          "showImage": true,
          "socialSharing": false,
          "stats": {
            "lifetime": { "duration": 724, "distance": 1181, "area": 40.109999999999999432, "walks": 2 },
            "current": { "stolenArea": 0, "area": 30.199999999999999289, "claims": 2 }
          }
        }
      }
      , {
        "_id": "D29rhHKvgynuzh5tr",
        "services": {
          "twitter": {
            "id": "19381889",
            "screenName": "IgnitedGeek",
            "accessToken": "19381889-Fj9K2D9w6Ol5plwuOCuk61RueaJ9DZmAa8JoO51Rw",
            "accessTokenSecret": "uPM9c4Scspbuih1aMdtblVb3CVHDrFOMQtDXfArLrgJen",
            "profile_image_url": "http://pbs.twimg.com/profile_images/602656169077899264/nb9L3phd_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/602656169077899264/nb9L3phd_normal.jpg",
            "lang": "en"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434126458395 },
              "hashedToken": "XKjLlTeyvmGAdFNMiU8Aqaan2Um0PZje/k6a1TQ+Hhc="
            }, { "when": { "date": 1434126817307 }, "hashedToken": "W1w5MwN+USxKOy+KxrIphyI05JiqHUwgvxN/TPW8yeY=" }]
          }
        },
        "profile": { "name": "Joshua Gdovin", "mapTheme": "Toner", "showImage": false, "socialSharing": false }
      }
      , {
        "_id": "oC57PXAg7veCnigfA",
        "services": {
          "twitter": {
            "id": "127239228",
            "screenName": "devon_barrett",
            "accessToken": "127239228-zSNyiA32BGGZvSA8QbYpbyZrd5xtm7Bow6zbMNSj",
            "accessTokenSecret": "QgKOqittWcettORMqo5as5BnDyD1U04mU8czRvRnJNrmg",
            "profile_image_url": "http://pbs.twimg.com/profile_images/3474596098/7cf1ec98ae680e58ab375a75e47cecfa_normal.png",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/3474596098/7cf1ec98ae680e58ab375a75e47cecfa_normal.png",
            "lang": "en"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434190537789 },
              "hashedToken": "xYgNGqKPVD4fktYW8wqlgXm0abLEMHSQvaD8nUCJ+BE="
            }]
          }
        },
        "profile": { "name": "Stella Kerr" }
      }
      , {
        "_id": "EFLwjDiJhydBEKeuR",
        "services": {
          "twitter": {
            "id": "2300518418",
            "screenName": "lazarskiDOTme",
            "accessToken": "2300518418-8mXprjWOl8QIAIQPgxjoUylhwwAaN13rIA0oMyq",
            "accessTokenSecret": "sgRicmu25EF7sJrBs7AQ4wizZYhXyPE2kHvrqkjllOnc9",
            "profile_image_url": "http://pbs.twimg.com/profile_images/572389830013632512/pcaZRTOz_normal.jpeg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/572389830013632512/pcaZRTOz_normal.jpeg",
            "lang": "de"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434371656803 },
              "hashedToken": "XwY4/Lu36pWb7awej27nOGT3x42NeArhofPCdd5VJXM="
            }]
          }
        },
        "profile": { "name": "Ella Ogden" }
      }
      , {
        "_id": "eWB38jFoBPuXsksot",
        "services": {
          "twitter": {
            "id": "28959021",
            "screenName": "yauh",
            "accessToken": "28959021-NVKfs7PQMbfHiz4LgTWw8Xx6xiWkzWNMpuEXWeybM",
            "accessTokenSecret": "45ZSeD18tf1P6lITV7IYXX5pmwwGozVCPeRPooU5k4EWt",
            "profile_image_url": "http://pbs.twimg.com/profile_images/555851158934138881/xkwUJfgz_normal.jpeg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/555851158934138881/xkwUJfgz_normal.jpeg",
            "lang": "de"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434105541242 },
              "hashedToken": "Yb5/EAikGG/+NCahY7+Ox8XDulG4PR1lJYHvbZVOJok="
            }, {
              "when": { "date": 1434122598049 },
              "hashedToken": "A4QLeT67Huzv15J7bH8Pg/E45dZqVp/kxL0fvLsUOv8="
            }, {
              "when": { "date": 1434267534420 },
              "hashedToken": "ElmMkM2lbFsOgvstuOIGLteHbgysmBt4Yqsa2f82Fmc="
            }, {
              "when": { "date": 1434282277349 },
              "hashedToken": "/Hg+GJ8G3Fbwst4WfECwptq1+TD5cDB8eJ9yJBGyVAk="
            }, {
              "when": { "date": 1434282538988 },
              "hashedToken": "cTQGHCy4KGlVZ24BXnJpIIBJrvaw0/t3TMzWka6j6e8="
            }, { "when": { "date": 1434284581768 }, "hashedToken": "hxrqOdWVQ5V5a8E7kRz+dWbVznUhPtKYB+m0PB69bww=" }]
          }
        },
        "profile": {
          "name": "Stephanski",
          "mapTheme": "Watercolor",
          "showImage": false,
          "socialSharing": false,
          "stats": {
            "lifetime": { "duration": 912, "distance": 1545, "area": 61.400000000000005684, "walks": 3 },
            "current": { "stolenArea": 0.22000000000000000111, "area": 57.809999999999995168, "claims": 3 }
          }
        }
      }
      , {
        "_id": "Zxj7oHHofL7XtJryu",
        "services": {
          "twitter": {
            "id": "15826032",
            "screenName": "maxnowack",
            "accessToken": "15826032-SO0OOQU7jflfVrYVlKykDbyhb6zfmPCpge1YPgbyZ",
            "accessTokenSecret": "SLVevrv1Qh7Hm6CZDODxPLDSDYQrz48qX7N9YOz7MzPvn",
            "profile_image_url": "http://pbs.twimg.com/profile_images/523119050948632578/nldJH0EA_normal.jpeg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/523119050948632578/nldJH0EA_normal.jpeg",
            "lang": "de"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434438064688 },
              "hashedToken": "B3YbYU4wdgWYSwIGVpcEbE54bGQjqyp3TNFIJoovBqM="
            }]
          }
        },
        "profile": { "name": "Max", "mapTheme": "Watercolor", "showImage": false, "socialSharing": false }
      }
      , {
        "_id": "QWqh9kiyz9c32Avwb",
        "services": {
          "twitter": {
            "id": "397249134",
            "screenName": "CSJenicek",
            "accessToken": "397249134-kVL8tBT7KwEWHZpNwr22RMJJMT07zXofYdiEyZlq",
            "accessTokenSecret": "gCsu35StC3lsZxpUIAN7Chj8waPLYhJQpfIjaKFzQSd3C",
            "profile_image_url": "http://pbs.twimg.com/profile_images/378800000062644644/4c9463f65109ca94595bb5008912cfaf_normal.jpeg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/378800000062644644/4c9463f65109ca94595bb5008912cfaf_normal.jpeg",
            "lang": "de"
          },
          "resume": {
            "loginTokens": [{
              "when": { "date": 1434443804753 },
              "hashedToken": "biPuTdTn9Hk7Hmos9EftoJOVn2GIgb/xPmfdCfDbrBE="
            }]
          }
        },
        "profile": { "name": "Butch White", "mapTheme": "Watercolor", "showImage": false, "socialSharing": false }
      }

    ];

    _.forEach( playerFixtures, function (players) {
      //Updates the profile and inserts it if it does not exist
      //Meteor.users.insert( players );
    } );

    console.log( '######### inserted players fixtures' );
  }

} );
