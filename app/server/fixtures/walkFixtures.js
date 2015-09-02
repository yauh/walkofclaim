// fixtures for walks


Meteor.startup( function () {
  if (WalksCollection.find().count() < 2) {
    var walkFixtures = [
      {
        "_id": "PTK7i7arMkKLxmgga",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169688182038413515, 44.990549613763569425] },
            "properties": { "timestamp": "2015-06-12T23:14:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169828076002346506, 44.99054898512083156] },
            "properties": { "timestamp": "2015-06-12T23:14:48+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169962605548249712, 44.99055225406306846] },
            "properties": { "timestamp": "2015-06-12T23:14:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170098140922533503, 44.990558750038026403] },
            "properties": { "timestamp": "2015-06-12T23:15:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170253373769270411, 44.990568892140863966] },
            "properties": { "timestamp": "2015-06-12T23:15:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170314980757581225, 44.990689843003629278] },
            "properties": { "timestamp": "2015-06-12T23:16:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170316992414342394, 44.991287137423633169] },
            "properties": { "timestamp": "2015-06-12T23:16:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170305928302155962, 44.991379086901424955] },
            "properties": { "timestamp": "2015-06-12T23:16:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170291092333542338, 44.991470407736478876] },
            "properties": { "timestamp": "2015-06-12T23:16:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170287069020019999, 44.991568853189228605] },
            "properties": { "timestamp": "2015-06-12T23:16:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170249769550906649, 44.991664364975868295] },
            "properties": { "timestamp": "2015-06-12T23:16:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170109875586973658, 44.991650031921444963] },
            "properties": { "timestamp": "2015-06-12T23:16:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16878075720106267, 44.991661808495400976] },
            "properties": { "timestamp": "2015-06-12T23:18:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168614963156329623, 44.991658749100743364] },
            "properties": { "timestamp": "2015-06-12T23:18:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168533658695565691, 44.991734270048318933] },
            "properties": { "timestamp": "2015-06-12T23:18:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168385885742651453, 44.991726349149821829] },
            "properties": { "timestamp": "2015-06-12T23:18:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168244063940989008, 44.991697138217269014] },
            "properties": { "timestamp": "2015-06-12T23:18:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168123615992413988, 44.991660048295734953] },
            "properties": { "timestamp": "2015-06-12T23:18:31+02:00" }
          }]
        },
        "userId": "qDsE5pbfTNiMvdEev",
        "begin": "2015-06-12T23:14:37+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[-93.169688182038413515, 44.990549613763569425], [-93.169828076002346506, 44.99054898512083156], [-93.169962605548249712, 44.99055225406306846], [-93.170098140922533503, 44.990558750038026403], [-93.170253373769270411, 44.990568892140863966], [-93.170314980757581225, 44.990689843003629278], [-93.170316992414342394, 44.991287137423633169], [-93.170305928302155962, 44.991379086901424955], [-93.170291092333542338, 44.991470407736478876], [-93.170287069020019999, 44.991568853189228605], [-93.170249769550906649, 44.991664364975868295], [-93.170109875586973658, 44.991650031921444963], [-93.16878075720106267, 44.991661808495400976], [-93.168614963156329623, 44.991658749100743364], [-93.168533658695565691, 44.991734270048318933], [-93.168385885742651453, 44.991726349149821829], [-93.168244063940989008, 44.991697138217269014], [-93.168123615992413988, 44.991660048295734953]]
          },
          "properties": { "userId": "qDsE5pbfTNiMvdEev" }
        },
        "archived": true
      }
      , {
        "_id": "fspZPKCPQHLnG2hxS",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394927999999998391, 51.475993199999997785] },
            "properties": { "timestamp": "2015-06-13T11:37:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239597299999999791, 51.475864100000002566] },
            "properties": { "timestamp": "2015-06-13T11:37:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393131999999997817, 51.475801599999996938] },
            "properties": { "timestamp": "2015-06-13T11:38:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396311000000004299, 51.47587779999999924] },
            "properties": { "timestamp": "2015-06-13T11:38:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393784999999999386, 51.475950799999999674] },
            "properties": { "timestamp": "2015-06-13T11:39:34+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395453999999999084, 51.475851400000003366] },
            "properties": { "timestamp": "2015-06-13T11:39:36+02:00" }
          }]
        },
        "userId": "xWCMyjoL5arJDsyG9",
        "begin": "2015-06-13T11:37:42+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2394927999999998391, 51.475993199999997785], [7.239597299999999791, 51.475864100000002566], [7.2393131999999997817, 51.475801599999996938], [7.2396311000000004299, 51.47587779999999924], [7.2393784999999999386, 51.475950799999999674], [7.2395453999999999084, 51.475851400000003366]]
          },
          "properties": { "userId": "xWCMyjoL5arJDsyG9" }
        },
        "end": "2015-06-13T11:39:37+02:00",
        "stats": { "distance": 95, "duration": 115, "area": 0.25 },
        "archived": true
      }
      , {
        "_id": "6AwJpdAZPkYWuQFdn",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396042477406927773, 51.475939024287718837] },
            "properties": { "timestamp": "2015-06-14T14:27:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396042477406927773, 51.475939024287718837] },
            "properties": { "timestamp": "2015-06-14T14:27:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394459135897823998, 51.475935713435966079] },
            "properties": { "timestamp": "2015-06-14T14:27:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393546346642443368, 51.475861491683382098] },
            "properties": { "timestamp": "2015-06-14T14:27:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2392617631771036812, 51.47578831766869456] },
            "properties": { "timestamp": "2015-06-14T14:27:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394134756245085427, 51.475755712065357272] },
            "properties": { "timestamp": "2015-06-14T14:28:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395635955103108117, 51.475752904127794807] },
            "properties": { "timestamp": "2015-06-14T14:28:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239678595221824331, 51.47580742840792567] },
            "properties": { "timestamp": "2015-06-14T14:28:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2397893201627203652, 51.475870795595902507] },
            "properties": { "timestamp": "2015-06-14T14:28:32+02:00" }
          }]
        },
        "userId": "eWB38jFoBPuXsksot",
        "begin": "2015-06-14T14:27:19+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2396042477406927773, 51.475939024287718837], [7.2396042477406927773, 51.475939024287718837], [7.2394459135897823998, 51.475935713435966079], [7.2393546346642443368, 51.475861491683382098], [7.2392617631771036812, 51.47578831766869456], [7.2394134756245085427, 51.475755712065357272], [7.2395635955103108117, 51.475752904127794807], [7.239678595221824331, 51.47580742840792567], [7.2397893201627203652, 51.475870795595902507]]
          },
          "properties": { "userId": "eWB38jFoBPuXsksot" }
        },
        "end": "2015-06-14T14:28:38+02:00",
        "stats": { "distance": 73, "duration": 79, "area": 0.47999999999999998224 },
        "archived": true
      }
      , {
        "_id": "Rfuej2PcXKHd3EpJu",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395996376939484307, 51.476038601297396724] },
            "properties": { "timestamp": "2015-06-14T14:38:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395996376939484307, 51.476038601297396724] },
            "properties": { "timestamp": "2015-06-14T14:38:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396358475156494805, 51.475951387594896858] },
            "properties": { "timestamp": "2015-06-14T14:38:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395325824685761162, 51.475875363733130996] },
            "properties": { "timestamp": "2015-06-14T14:38:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393941972472140023, 51.475820671814936702] },
            "properties": { "timestamp": "2015-06-14T14:38:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239293279133028669, 51.475736978511768882] },
            "properties": { "timestamp": "2015-06-14T14:38:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2391698975183436104, 51.475678556646663253] },
            "properties": { "timestamp": "2015-06-14T14:39:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390498686649262794, 51.475626630756515567] },
            "properties": { "timestamp": "2015-06-14T14:39:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388946358181893714, 51.475588702644664352] },
            "properties": { "timestamp": "2015-06-14T14:39:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2387690749086797126, 51.475538495044666831] },
            "properties": { "timestamp": "2015-06-14T14:39:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386461962081849464, 51.475482210564869945] },
            "properties": { "timestamp": "2015-06-14T14:39:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2385523188926637062, 51.475399062085408275] },
            "properties": { "timestamp": "2015-06-14T14:39:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2384670749374091514, 51.475323331590253417] },
            "properties": { "timestamp": "2015-06-14T14:39:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2383415140278994926, 51.475257030736166541] },
            "properties": { "timestamp": "2015-06-14T14:39:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2382316272773206123, 51.475187754306453769] },
            "properties": { "timestamp": "2015-06-14T14:39:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2380919009514501639, 51.475122626918810909] },
            "properties": { "timestamp": "2015-06-14T14:39:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2379789967157295294, 51.475049159537512367] },
            "properties": { "timestamp": "2015-06-14T14:40:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2378625720806768484, 51.474987845915812557] },
            "properties": { "timestamp": "2015-06-14T14:40:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2377356700666597433, 51.474940613891440933] },
            "properties": { "timestamp": "2015-06-14T14:40:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2378522623397758551, 51.474872091833013599] },
            "properties": { "timestamp": "2015-06-14T14:40:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2379631549187353201, 51.47480256394620568] },
            "properties": { "timestamp": "2015-06-14T14:40:34+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2380942478843381949, 51.474757846492785518] },
            "properties": { "timestamp": "2015-06-14T14:40:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2382384166188895591, 51.474723145413655345] },
            "properties": { "timestamp": "2015-06-14T14:40:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2383820824392497428, 51.474686809863406722] },
            "properties": { "timestamp": "2015-06-14T14:40:56+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2384881973334014305, 51.474624783779937331] },
            "properties": { "timestamp": "2015-06-14T14:41:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386010177500903495, 51.474564350258070533] },
            "properties": { "timestamp": "2015-06-14T14:41:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2387467790462434181, 51.474507730502146785] },
            "properties": { "timestamp": "2015-06-14T14:41:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388844098963200935, 51.474446542608994548] },
            "properties": { "timestamp": "2015-06-14T14:41:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239035284153407801, 51.474460372749227588] },
            "properties": { "timestamp": "2015-06-14T14:41:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2391126491196811088, 51.474538324448722904] },
            "properties": { "timestamp": "2015-06-14T14:41:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2392610088058182427, 51.474543060224014823] },
            "properties": { "timestamp": "2015-06-14T14:41:30+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393822949447104165, 51.474592681090790336] },
            "properties": { "timestamp": "2015-06-14T14:41:36+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394718974896141717, 51.474681403535861079] },
            "properties": { "timestamp": "2015-06-14T14:41:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395786829360195824, 51.474750051322835986] },
            "properties": { "timestamp": "2015-06-14T14:41:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396754939176508614, 51.474828841212648456] },
            "properties": { "timestamp": "2015-06-14T14:41:56+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239777334041185064, 51.47490444597925574] },
            "properties": { "timestamp": "2015-06-14T14:42:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2398766595937678048, 51.474987720187264983] },
            "properties": { "timestamp": "2015-06-14T14:42:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239997610456533117, 51.475051045465725963] },
            "properties": { "timestamp": "2015-06-14T14:42:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2401228360899168024, 51.475115879486757819] },
            "properties": { "timestamp": "2015-06-14T14:42:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2402354050495105753, 51.475177402656036918] },
            "properties": { "timestamp": "2015-06-14T14:42:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.240359876311607934, 51.475233519497770374] },
            "properties": { "timestamp": "2015-06-14T14:42:30+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2404774744131046305, 51.475295210305112903] },
            "properties": { "timestamp": "2015-06-14T14:42:36+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406174521960693369, 51.475345082628983562] },
            "properties": { "timestamp": "2015-06-14T14:42:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406195476718622217, 51.47543682255919606] },
            "properties": { "timestamp": "2015-06-14T14:42:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.240528352565355874, 51.475515528629976814] },
            "properties": { "timestamp": "2015-06-14T14:42:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2404898796297985086, 51.475632498088735645] },
            "properties": { "timestamp": "2015-06-14T14:42:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2404217347570138941, 51.475717783953506057] },
            "properties": { "timestamp": "2015-06-14T14:43:03+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2403544280745464334, 51.475809691521781986] },
            "properties": { "timestamp": "2015-06-14T14:43:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.240257952369042016, 51.475896863314765994] },
            "properties": { "timestamp": "2015-06-14T14:43:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2401204891570287714, 51.475928672637301986] },
            "properties": { "timestamp": "2015-06-14T14:43:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2399544436551996895, 51.475938814740139549] },
            "properties": { "timestamp": "2015-06-14T14:43:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2398075927116343209, 51.475983322645980422] },
            "properties": { "timestamp": "2015-06-14T14:43:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2398075927116343209, 51.475983322645980422] },
            "properties": { "timestamp": "2015-06-14T14:43:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396119590916105935, 51.476039271849650447] },
            "properties": { "timestamp": "2015-06-14T14:43:54+02:00" }
          }]
        },
        "userId": "eWB38jFoBPuXsksot",
        "begin": "2015-06-14T14:38:28+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2395996376939484307, 51.476038601297396724], [7.2395996376939484307, 51.476038601297396724], [7.2396358475156494805, 51.475951387594896858], [7.2395325824685761162, 51.475875363733130996], [7.2393941972472140023, 51.475820671814936702], [7.239293279133028669, 51.475736978511768882], [7.2391698975183436104, 51.475678556646663253], [7.2390498686649262794, 51.475626630756515567], [7.2388946358181893714, 51.475588702644664352], [7.2387690749086797126, 51.475538495044666831], [7.2386461962081849464, 51.475482210564869945], [7.2385523188926637062, 51.475399062085408275], [7.2384670749374091514, 51.475323331590253417], [7.2383415140278994926, 51.475257030736166541], [7.2382316272773206123, 51.475187754306453769], [7.2380919009514501639, 51.475122626918810909], [7.2379789967157295294, 51.475049159537512367], [7.2378625720806768484, 51.474987845915812557], [7.2377356700666597433, 51.474940613891440933], [7.2378522623397758551, 51.474872091833013599], [7.2379631549187353201, 51.47480256394620568], [7.2380942478843381949, 51.474757846492785518], [7.2382384166188895591, 51.474723145413655345], [7.2383820824392497428, 51.474686809863406722], [7.2384881973334014305, 51.474624783779937331], [7.2386010177500903495, 51.474564350258070533], [7.2387467790462434181, 51.474507730502146785], [7.2388844098963200935, 51.474446542608994548], [7.239035284153407801, 51.474460372749227588], [7.2391126491196811088, 51.474538324448722904], [7.2392610088058182427, 51.474543060224014823], [7.2393822949447104165, 51.474592681090790336], [7.2394718974896141717, 51.474681403535861079], [7.2395786829360195824, 51.474750051322835986], [7.2396754939176508614, 51.474828841212648456], [7.239777334041185064, 51.47490444597925574], [7.2398766595937678048, 51.474987720187264983], [7.239997610456533117, 51.475051045465725963], [7.2401228360899168024, 51.475115879486757819], [7.2402354050495105753, 51.475177402656036918], [7.240359876311607934, 51.475233519497770374], [7.2404774744131046305, 51.475295210305112903], [7.2406174521960693369, 51.475345082628983562], [7.2406195476718622217, 51.47543682255919606], [7.240528352565355874, 51.475515528629976814], [7.2404898796297985086, 51.475632498088735645], [7.2404217347570138941, 51.475717783953506057], [7.2403544280745464334, 51.475809691521781986], [7.240257952369042016, 51.475896863314765994], [7.2401204891570287714, 51.475928672637301986], [7.2399544436551996895, 51.475938814740139549], [7.2398075927116343209, 51.475983322645980422], [7.2398075927116343209, 51.475983322645980422], [7.2396119590916105935, 51.476039271849650447]]
          },
          "properties": { "userId": "eWB38jFoBPuXsksot" }
        },
        "end": "2015-06-14T14:43:54+02:00",
        "stats": { "distance": 561, "duration": 326, "area": 19.030000000000001137 }
      }
      , {
        "_id": "CCCH5ntC5zrAfjS7v",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16954728224609994, 44.990587164689777921] },
            "properties": { "timestamp": "2015-06-15T15:25:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16960603938733243, 44.990554768634019922] },
            "properties": { "timestamp": "2015-06-15T15:25:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169739563104855051, 44.990534358699797224] },
            "properties": { "timestamp": "2015-06-15T15:25:34+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169876607221709719, 44.99051277529913051] },
            "properties": { "timestamp": "2015-06-15T15:25:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170019099575625887, 44.990535867442368101] },
            "properties": { "timestamp": "2015-06-15T15:25:48+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170165782881127825, 44.99053989075589044] },
            "properties": { "timestamp": "2015-06-15T15:25:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170293271628366938, 44.990562396165906023] },
            "properties": { "timestamp": "2015-06-15T15:26:03+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170312214729534617, 44.990660003428338598] },
            "properties": { "timestamp": "2015-06-15T15:26:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170337528077112665, 44.990755724762557577] },
            "properties": { "timestamp": "2015-06-15T15:26:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170323278841721049, 44.990847967606960367] },
            "properties": { "timestamp": "2015-06-15T15:26:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170353956607328882, 44.990941090551196169] },
            "properties": { "timestamp": "2015-06-15T15:26:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170368792575942507, 44.991034925957201551] },
            "properties": { "timestamp": "2015-06-15T15:26:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170370301318513384, 44.991132910405276846] },
            "properties": { "timestamp": "2015-06-15T15:26:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170382706535207262, 44.991234960076390337] },
            "properties": { "timestamp": "2015-06-15T15:26:48+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170397458684789171, 44.991332693067370485] },
            "properties": { "timestamp": "2015-06-15T15:26:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170367954385625353, 44.991427366663693022] },
            "properties": { "timestamp": "2015-06-15T15:27:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170421095651732912, 44.991509509314774107] },
            "properties": { "timestamp": "2015-06-15T15:27:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170315818947898379, 44.991577277001916002] },
            "properties": { "timestamp": "2015-06-15T15:27:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170174500060426226, 44.991615247023283075] },
            "properties": { "timestamp": "2015-06-15T15:27:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170030582782970896, 44.991624131840644907] },
            "properties": { "timestamp": "2015-06-15T15:27:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169905189511524668, 44.991656527896402906] },
            "properties": { "timestamp": "2015-06-15T15:27:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169789100152598849, 44.991693240632294248] },
            "properties": { "timestamp": "2015-06-15T15:27:34+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169661779043423167, 44.991683769081710409] },
            "properties": { "timestamp": "2015-06-15T15:27:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169534877029406061, 44.991674632807253431] },
            "properties": { "timestamp": "2015-06-15T15:27:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169421218422399988, 44.991626520683048795] },
            "properties": { "timestamp": "2015-06-15T15:27:52+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169358521786676874, 44.991536624771534036] },
            "properties": { "timestamp": "2015-06-15T15:27:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169352486816393366, 44.991444717203258108] },
            "properties": { "timestamp": "2015-06-15T15:28:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169341422704206934, 44.991345349741159509] },
            "properties": { "timestamp": "2015-06-15T15:28:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169263638642775049, 44.991273055826304983] },
            "properties": { "timestamp": "2015-06-15T15:28:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169182250362979403, 44.99118705749976499] },
            "properties": { "timestamp": "2015-06-15T15:28:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169191386637436381, 44.991089743603943418] },
            "properties": { "timestamp": "2015-06-15T15:28:31+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169200019997703066, 44.990997584578572344] },
            "properties": { "timestamp": "2015-06-15T15:28:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169332118791686526, 44.990950184916137289] },
            "properties": { "timestamp": "2015-06-15T15:28:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169461619195686808, 44.990937192966221403] },
            "properties": { "timestamp": "2015-06-15T15:28:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16950998277698659, 44.990837406408964227] },
            "properties": { "timestamp": "2015-06-15T15:28:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169543510389672747, 44.990747720045028757] },
            "properties": { "timestamp": "2015-06-15T15:29:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169559687462793818, 44.990640054498790334] },
            "properties": { "timestamp": "2015-06-15T15:29:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169550886464463701, 44.990544291255055498] },
            "properties": { "timestamp": "2015-06-15T15:29:15+02:00" }
          }]
        },
        "userId": "qDsE5pbfTNiMvdEev",
        "begin": "2015-06-15T15:25:22+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[-93.16954728224609994, 44.990587164689777921], [-93.16960603938733243, 44.990554768634019922], [-93.169739563104855051, 44.990534358699797224], [-93.169876607221709719, 44.99051277529913051], [-93.170019099575625887, 44.990535867442368101], [-93.170165782881127825, 44.99053989075589044], [-93.170293271628366938, 44.990562396165906023], [-93.170312214729534617, 44.990660003428338598], [-93.170337528077112665, 44.990755724762557577], [-93.170323278841721049, 44.990847967606960367], [-93.170353956607328882, 44.990941090551196169], [-93.170368792575942507, 44.991034925957201551], [-93.170370301318513384, 44.991132910405276846], [-93.170382706535207262, 44.991234960076390337], [-93.170397458684789171, 44.991332693067370485], [-93.170367954385625353, 44.991427366663693022], [-93.170421095651732912, 44.991509509314774107], [-93.170315818947898379, 44.991577277001916002], [-93.170174500060426226, 44.991615247023283075], [-93.170030582782970896, 44.991624131840644907], [-93.169905189511524668, 44.991656527896402906], [-93.169789100152598849, 44.991693240632294248], [-93.169661779043423167, 44.991683769081710409], [-93.169534877029406061, 44.991674632807253431], [-93.169421218422399988, 44.991626520683048795], [-93.169358521786676874, 44.991536624771534036], [-93.169352486816393366, 44.991444717203258108], [-93.169341422704206934, 44.991345349741159509], [-93.169263638642775049, 44.991273055826304983], [-93.169182250362979403, 44.99118705749976499], [-93.169191386637436381, 44.991089743603943418], [-93.169200019997703066, 44.990997584578572344], [-93.169332118791686526, 44.990950184916137289], [-93.169461619195686808, 44.990937192966221403], [-93.16950998277698659, 44.990837406408964227], [-93.169543510389672747, 44.990747720045028757], [-93.169559687462793818, 44.990640054498790334], [-93.169550886464463701, 44.990544291255055498]]
          },
          "properties": { "userId": "qDsE5pbfTNiMvdEev" }
        },
        "end": "2015-06-15T15:29:25+02:00",
        "stats": { "distance": 395, "duration": 243, "area": 10.269999999999999574 }
      }
      , {
        "_id": "hJbDxkxSHspvrBpbh",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [0, 0] },
            "properties": { "timestamp": "2015-06-16T09:01:10+02:00" }
          }]
        },
        "userId": "Zxj7oHHofL7XtJryu",
        "begin": "2015-06-16T09:01:10+02:00",
        "archived": true
      }
      , {
        "_id": "7y6uGKDfmwScye3yM",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365712389362384371, 52.537878630731754015] },
            "properties": { "timestamp": "2015-06-16T10:36:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365941382957030825, 52.537624239970497797] },
            "properties": { "timestamp": "2015-06-16T10:37:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366112457600761942, 52.537600100089363764] },
            "properties": { "timestamp": "2015-06-16T10:38:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366040708509613566, 52.537679141436271379] },
            "properties": { "timestamp": "2015-06-16T10:38:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36601916701846271, 52.537902435336761187] },
            "properties": { "timestamp": "2015-06-16T10:38:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365981699911285929, 52.537998324309043596] },
            "properties": { "timestamp": "2015-06-16T10:38:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365926295531322054, 52.538094464738421152] },
            "properties": { "timestamp": "2015-06-16T10:38:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365853875887919955, 52.538177864674977968] },
            "properties": { "timestamp": "2015-06-16T10:38:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365744492051531367, 52.538115922410540293] },
            "properties": { "timestamp": "2015-06-16T10:39:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365795537841846041, 52.538201250184826563] },
            "properties": { "timestamp": "2015-06-16T10:39:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365933084872891001, 52.538248314571134756] },
            "properties": { "timestamp": "2015-06-16T10:39:31+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366020508122970156, 52.538175769199185083] },
            "properties": { "timestamp": "2015-06-16T10:39:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366173980770041041, 52.53817237452840061] },
            "properties": { "timestamp": "2015-06-16T10:39:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.3663846179967436, 52.537849838894359777] },
            "properties": { "timestamp": "2015-06-16T10:40:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366189403471876673, 52.537903692622236917] },
            "properties": { "timestamp": "2015-06-16T10:40:28+02:00" }
          }]
        },
        "userId": "QWqh9kiyz9c32Avwb",
        "begin": "2015-06-16T10:36:47+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[13.365712389362384371, 52.537878630731754015], [13.365941382957030825, 52.537624239970497797], [13.366112457600761942, 52.537600100089363764], [13.366040708509613566, 52.537679141436271379], [13.36601916701846271, 52.537902435336761187], [13.365981699911285929, 52.537998324309043596], [13.365926295531322054, 52.538094464738421152], [13.365853875887919955, 52.538177864674977968], [13.365744492051531367, 52.538115922410540293], [13.365795537841846041, 52.538201250184826563], [13.365933084872891001, 52.538248314571134756], [13.366020508122970156, 52.538175769199185083], [13.366173980770041041, 52.53817237452840061], [13.3663846179967436, 52.537849838894359777], [13.366189403471876673, 52.537903692622236917]]
          },
          "properties": { "userId": "QWqh9kiyz9c32Avwb" }
        },
        "archived": true
      }
      , {
        "_id": "iXYLKm65YL9v6voos",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [9.8155576363297321052, 51.507437336306558961] },
            "properties": { "timestamp": "2015-06-16T11:36:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [9.8157218378128625602, 51.507326359908567781] },
            "properties": { "timestamp": "2015-06-16T11:36:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [9.8156175669374086112, 51.507402006584690923] },
            "properties": { "timestamp": "2015-06-16T11:36:43+02:00" }
          }]
        },
        "userId": "Zxj7oHHofL7XtJryu",
        "begin": "2015-06-16T11:36:14+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[9.8155576363297321052, 51.507437336306558961], [9.8157218378128625602, 51.507326359908567781], [9.8156175669374086112, 51.507402006584690923]]
          },
          "properties": { "userId": "Zxj7oHHofL7XtJryu" }
        }
      }
      , {
        "_id": "BuNGiLFAEtSGtfq5f",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393701000000003631, 51.475812400000002356] },
            "properties": { "timestamp": "2015-06-16T14:38:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393701000000003631, 51.475812400000002356] },
            "properties": { "timestamp": "2015-06-16T14:38:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394397000000001441, 51.475685599999998487] },
            "properties": { "timestamp": "2015-06-16T14:38:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394004000000000687, 51.475539799999999957] },
            "properties": { "timestamp": "2015-06-16T14:39:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393593999999996669, 51.475385400000000402] },
            "properties": { "timestamp": "2015-06-16T14:39:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2391259000000003354, 51.475295899999998994] },
            "properties": { "timestamp": "2015-06-16T14:39:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388345000000002827, 51.475168699999997557] },
            "properties": { "timestamp": "2015-06-16T14:39:31+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386042000000001551, 51.474887199999997733] },
            "properties": { "timestamp": "2015-06-16T14:39:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2384328000000000003, 51.475012499999998283] },
            "properties": { "timestamp": "2015-06-16T14:40:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2383603000000000804, 51.475119499999998141] },
            "properties": { "timestamp": "2015-06-16T14:40:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2384365999999999985, 51.475226700000000335] },
            "properties": { "timestamp": "2015-06-16T14:40:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2385770000000002611, 51.475331300000000567] },
            "properties": { "timestamp": "2015-06-16T14:40:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386793000000002607, 51.475454499999997893] },
            "properties": { "timestamp": "2015-06-16T14:40:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388449000000001377, 51.475538800000002482] },
            "properties": { "timestamp": "2015-06-16T14:40:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.238989000000000118, 51.475604199999999366] },
            "properties": { "timestamp": "2015-06-16T14:41:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2391598999999997588, 51.47566659999999672] },
            "properties": { "timestamp": "2015-06-16T14:41:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239346600000000187, 51.475693300000003205] },
            "properties": { "timestamp": "2015-06-16T14:41:14+02:00" }
          }]
        },
        "userId": "xWCMyjoL5arJDsyG9",
        "begin": "2015-06-16T14:38:42+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2393701000000003631, 51.475812400000002356], [7.2393701000000003631, 51.475812400000002356], [7.2394397000000001441, 51.475685599999998487], [7.2394004000000000687, 51.475539799999999957], [7.2393593999999996669, 51.475385400000000402], [7.2391259000000003354, 51.475295899999998994], [7.2388345000000002827, 51.475168699999997557], [7.2386042000000001551, 51.474887199999997733], [7.2384328000000000003, 51.475012499999998283], [7.2383603000000000804, 51.475119499999998141], [7.2384365999999999985, 51.475226700000000335], [7.2385770000000002611, 51.475331300000000567], [7.2386793000000002607, 51.475454499999997893], [7.2388449000000001377, 51.475538800000002482], [7.238989000000000118, 51.475604199999999366], [7.2391598999999997588, 51.47566659999999672], [7.239346600000000187, 51.475693300000003205]]
          },
          "properties": { "userId": "xWCMyjoL5arJDsyG9" }
        },
        "end": "2015-06-16T14:41:20+02:00",
        "stats": { "distance": 256, "duration": 158, "area": 3.4199999999999999289 }
      }
      , {
        "_id": "EserGRPYW6dMxbpCw",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395887412198254296, 51.47579250862028033] },
            "properties": { "timestamp": "2015-06-16T14:39:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395887412198254296, 51.47579250862028033] },
            "properties": { "timestamp": "2015-06-16T14:39:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394309099831053445, 51.475757220807928149] },
            "properties": { "timestamp": "2015-06-16T14:39:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393884137340256402, 51.475671222481388156] },
            "properties": { "timestamp": "2015-06-16T14:39:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394176665760943123, 51.475578099537152355] },
            "properties": { "timestamp": "2015-06-16T14:39:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394032497026392647, 51.475481246646005218] },
            "properties": { "timestamp": "2015-06-16T14:39:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2392577398635813424, 51.475438582758862083] },
            "properties": { "timestamp": "2015-06-16T14:39:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2391507029600798973, 51.475353003527480666] },
            "properties": { "timestamp": "2015-06-16T14:39:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390366252579152473, 51.475274507004279201] },
            "properties": { "timestamp": "2015-06-16T14:39:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2389062028445660957, 51.47522740070845515] },
            "properties": { "timestamp": "2015-06-16T14:39:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2387919575043380149, 51.475170361857372825] },
            "properties": { "timestamp": "2015-06-16T14:39:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388647124238669761, 51.47507074293817908] },
            "properties": { "timestamp": "2015-06-16T14:39:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.238907124853914965, 51.474980847026664321] },
            "properties": { "timestamp": "2015-06-16T14:39:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.238820120698994387, 51.474907966378587787] },
            "properties": { "timestamp": "2015-06-16T14:39:52+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386961523510873207, 51.474855998578924243] },
            "properties": { "timestamp": "2015-06-16T14:40:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386080585487544425, 51.474930178421992366] },
            "properties": { "timestamp": "2015-06-16T14:40:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2385459486462533363, 51.475026235032338207] },
            "properties": { "timestamp": "2015-06-16T14:40:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2384640574522673973, 51.475113071549195354] },
            "properties": { "timestamp": "2015-06-16T14:40:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2383585292913377174, 51.475181761245686118] },
            "properties": { "timestamp": "2015-06-16T14:40:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2384303622015178092, 51.475271782885748451] },
            "properties": { "timestamp": "2015-06-16T14:40:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2385224793173730262, 51.475361092064041202] },
            "properties": { "timestamp": "2015-06-16T14:40:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386391554095208534, 51.475432170602935855] },
            "properties": { "timestamp": "2015-06-16T14:40:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2387786302782952674, 51.475466033491748874] },
            "properties": { "timestamp": "2015-06-16T14:40:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2389284148879706748, 51.475507482002932136] },
            "properties": { "timestamp": "2015-06-16T14:40:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390488628365456947, 51.475561251911777561] },
            "properties": { "timestamp": "2015-06-16T14:41:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2391802910782763192, 51.47562839095618159] },
            "properties": { "timestamp": "2015-06-16T14:41:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393189277567335793, 51.475679017651337688] },
            "properties": { "timestamp": "2015-06-16T14:41:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394738253273436257, 51.475692680153507297] },
            "properties": { "timestamp": "2015-06-16T14:41:36+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396024875410267541, 51.475744019310432975] },
            "properties": { "timestamp": "2015-06-16T14:41:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2397398669340082833, 51.475780480589229171] },
            "properties": { "timestamp": "2015-06-16T14:42:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239600978798455877, 51.475841123658675258] },
            "properties": { "timestamp": "2015-06-16T14:42:24+02:00" }
          }]
        },
        "userId": "eWB38jFoBPuXsksot",
        "begin": "2015-06-16T14:39:11+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2395887412198254296, 51.47579250862028033], [7.2395887412198254296, 51.47579250862028033], [7.2394309099831053445, 51.475757220807928149], [7.2393884137340256402, 51.475671222481388156], [7.2394176665760943123, 51.475578099537152355], [7.2394032497026392647, 51.475481246646005218], [7.2392577398635813424, 51.475438582758862083], [7.2391507029600798973, 51.475353003527480666], [7.2390366252579152473, 51.475274507004279201], [7.2389062028445660957, 51.47522740070845515], [7.2387919575043380149, 51.475170361857372825], [7.2388647124238669761, 51.47507074293817908], [7.238907124853914965, 51.474980847026664321], [7.238820120698994387, 51.474907966378587787], [7.2386961523510873207, 51.474855998578924243], [7.2386080585487544425, 51.474930178421992366], [7.2385459486462533363, 51.475026235032338207], [7.2384640574522673973, 51.475113071549195354], [7.2383585292913377174, 51.475181761245686118], [7.2384303622015178092, 51.475271782885748451], [7.2385224793173730262, 51.475361092064041202], [7.2386391554095208534, 51.475432170602935855], [7.2387786302782952674, 51.475466033491748874], [7.2389284148879706748, 51.475507482002932136], [7.2390488628365456947, 51.475561251911777561], [7.2391802910782763192, 51.47562839095618159], [7.2393189277567335793, 51.475679017651337688], [7.2394738253273436257, 51.475692680153507297], [7.2396024875410267541, 51.475744019310432975], [7.2397398669340082833, 51.475780480589229171], [7.239600978798455877, 51.475841123658675258]]
          },
          "properties": { "userId": "eWB38jFoBPuXsksot" }
        }
      }
      , {
        "_id": "bHfdEzMhEoXztwNK7",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29575800000000002088, 51.530031000000001029] },
            "properties": { "timestamp": "2015-06-13T19:39:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29587279999999999136, 51.530051100000001441] },
            "properties": { "timestamp": "2015-06-13T19:39:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29605700000000001459, 51.529730499999999438] },
            "properties": { "timestamp": "2015-06-13T19:39:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29583860000000000712, 51.530040599999999529] },
            "properties": { "timestamp": "2015-06-13T19:39:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29600809999999999622, 51.530100599999997257] },
            "properties": { "timestamp": "2015-06-13T19:39:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29619909999999999295, 51.530127200000002574] },
            "properties": { "timestamp": "2015-06-13T19:39:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29635210000000000719, 51.530172600000000216] },
            "properties": { "timestamp": "2015-06-13T19:39:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29649900000000001254, 51.530205700000003333] },
            "properties": { "timestamp": "2015-06-13T19:39:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29665289999999999715, 51.530197899999997446] },
            "properties": { "timestamp": "2015-06-13T19:40:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29680990000000001539, 51.530199500000001933] },
            "properties": { "timestamp": "2015-06-13T19:40:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29696030000000001037, 51.530225500000000238] },
            "properties": { "timestamp": "2015-06-13T19:40:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29708459999999997647, 51.530287299999997686] },
            "properties": { "timestamp": "2015-06-13T19:40:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29724689999999998058, 51.530300799999999128] },
            "properties": { "timestamp": "2015-06-13T19:40:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29739209999999999257, 51.53031750000000244] },
            "properties": { "timestamp": "2015-06-13T19:41:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29754249999999998755, 51.530337899999999252] },
            "properties": { "timestamp": "2015-06-13T19:41:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29768509999999998028, 51.530364900000002137] },
            "properties": { "timestamp": "2015-06-13T19:41:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29783789999999998876, 51.530401099999998848] },
            "properties": { "timestamp": "2015-06-13T19:41:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29798900000000000388, 51.530415900000001272] },
            "properties": { "timestamp": "2015-06-13T19:41:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29813830000000002274, 51.530422199999996735] },
            "properties": { "timestamp": "2015-06-13T19:41:43+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2982828000000000146, 51.530470200000003445] },
            "properties": { "timestamp": "2015-06-13T19:41:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29843239999999998657, 51.530505200000000343] },
            "properties": { "timestamp": "2015-06-13T19:42:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29858800000000002006, 51.530546000000001072] },
            "properties": { "timestamp": "2015-06-13T19:43:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29875790000000002067, 51.53055880000000144] },
            "properties": { "timestamp": "2015-06-13T19:43:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29893229999999998414, 51.530604799999998988] },
            "properties": { "timestamp": "2015-06-13T19:43:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2990639999999999965, 51.530663799999999242] },
            "properties": { "timestamp": "2015-06-13T19:44:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29921360000000002399, 51.530696700000000021] },
            "properties": { "timestamp": "2015-06-13T19:44:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2993474999999999886, 51.53073100000000295] },
            "properties": { "timestamp": "2015-06-13T19:44:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29951349999999998808, 51.530770900000000267] },
            "properties": { "timestamp": "2015-06-13T19:44:25+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29971399999999998043, 51.530799700000002872] },
            "properties": { "timestamp": "2015-06-13T19:44:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29989050000000000429, 51.530813500000000715] },
            "properties": { "timestamp": "2015-06-13T19:44:48+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.3000448000000000004, 51.530841999999999814] },
            "properties": { "timestamp": "2015-06-13T19:44:56+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30017169999999998575, 51.53076250000000158] },
            "properties": { "timestamp": "2015-06-13T19:45:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30027130000000001875, 51.530678799999996897] },
            "properties": { "timestamp": "2015-06-13T19:45:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30003669999999998952, 51.530717799999997908] },
            "properties": { "timestamp": "2015-06-13T19:45:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30030919999999999837, 51.5309991000000025] },
            "properties": { "timestamp": "2015-06-13T19:46:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30017840000000001188, 51.531293099999999185] },
            "properties": { "timestamp": "2015-06-13T19:46:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30033850000000000824, 51.53123560000000225] },
            "properties": { "timestamp": "2015-06-13T19:46:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30022939999999997962, 51.531149300000002711] },
            "properties": { "timestamp": "2015-06-13T19:47:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30007410000000001027, 51.531103899999997964] },
            "properties": { "timestamp": "2015-06-13T19:47:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29992809999999997528, 51.531095899999996846] },
            "properties": { "timestamp": "2015-06-13T19:48:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29977199999999998292, 51.531087499999998158] },
            "properties": { "timestamp": "2015-06-13T19:48:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29962080000000002045, 51.531056200000001866] },
            "properties": { "timestamp": "2015-06-13T19:48:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29951200000000000045, 51.530993199999997501] },
            "properties": { "timestamp": "2015-06-13T19:48:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29936220000000002273, 51.530973899999999333] },
            "properties": { "timestamp": "2015-06-13T19:48:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29921310000000000962, 51.530984199999998907] },
            "properties": { "timestamp": "2015-06-13T19:48:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29906260000000001176, 51.531003699999999412] },
            "properties": { "timestamp": "2015-06-13T19:48:48+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2989101000000000119, 51.531029799999998886] },
            "properties": { "timestamp": "2015-06-13T19:48:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29874040000000001704, 51.531002899999997169] },
            "properties": { "timestamp": "2015-06-13T19:49:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29857349999999999168, 51.531041700000002947] },
            "properties": { "timestamp": "2015-06-13T19:49:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29796640000000002013, 51.531662900000000604] },
            "properties": { "timestamp": "2015-06-13T19:49:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29824469999999997372, 51.531451699999998084] },
            "properties": { "timestamp": "2015-06-13T19:49:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29824610000000001397, 51.531582700000001296] },
            "properties": { "timestamp": "2015-06-13T19:50:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29809809999999997698, 51.53159920000000227] },
            "properties": { "timestamp": "2015-06-13T19:50:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29795880000000002363, 51.531646000000002061] },
            "properties": { "timestamp": "2015-06-13T19:50:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29781760000000001565, 51.531670699999999385] },
            "properties": { "timestamp": "2015-06-13T19:50:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29766910000000001979, 51.531684599999998397] },
            "properties": { "timestamp": "2015-06-13T19:50:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29754779999999997342, 51.531785999999996761] },
            "properties": { "timestamp": "2015-06-13T19:51:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29736259999999997694, 51.531789600000003304] },
            "properties": { "timestamp": "2015-06-13T19:51:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29720489999999999409, 51.531742500000000007] },
            "properties": { "timestamp": "2015-06-13T19:51:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29701040000000000774, 51.531745800000003044] },
            "properties": { "timestamp": "2015-06-13T19:51:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29684159999999998325, 51.531741500000002532] },
            "properties": { "timestamp": "2015-06-13T19:51:43+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29667130000000002665, 51.531756399999999019] },
            "properties": { "timestamp": "2015-06-13T19:51:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29650819999999999954, 51.531717399999998008] },
            "properties": { "timestamp": "2015-06-13T19:52:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29632859999999999756, 51.53168269999999751] },
            "properties": { "timestamp": "2015-06-13T19:52:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29616619999999999058, 51.531691199999997366] },
            "properties": { "timestamp": "2015-06-13T19:52:25+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29599829999999999197, 51.531729499999997302] },
            "properties": { "timestamp": "2015-06-13T19:52:34+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29580269999999997399, 51.531734800000002394] },
            "properties": { "timestamp": "2015-06-13T19:52:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29560809999999998476, 51.531695300000002646] },
            "properties": { "timestamp": "2015-06-13T19:52:52+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29541180000000000216, 51.531708500000000583] },
            "properties": { "timestamp": "2015-06-13T19:53:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29523880000000002344, 51.531737200000002019] },
            "properties": { "timestamp": "2015-06-13T19:53:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2950757999999999992, 51.531757599999998831] },
            "properties": { "timestamp": "2015-06-13T19:53:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29491580000000000572, 51.531780400000002373] },
            "properties": { "timestamp": "2015-06-13T19:53:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29477940000000002474, 51.531844300000003045] },
            "properties": { "timestamp": "2015-06-13T19:53:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29466229999999998812, 51.53192539999999866] },
            "properties": { "timestamp": "2015-06-13T19:53:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29468719999999998249, 51.532038999999997486] },
            "properties": { "timestamp": "2015-06-13T19:53:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29478619999999999823, 51.532137099999999919] },
            "properties": { "timestamp": "2015-06-13T19:53:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29484690000000002286, 51.532251700000003325] },
            "properties": { "timestamp": "2015-06-13T19:53:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29492930000000000534, 51.532358700000003182] },
            "properties": { "timestamp": "2015-06-13T19:54:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29503069999999997908, 51.532471100000002195] },
            "properties": { "timestamp": "2015-06-13T19:54:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29507790000000000408, 51.532590900000002421] },
            "properties": { "timestamp": "2015-06-13T19:54:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29521629999999998706, 51.532670199999998317] },
            "properties": { "timestamp": "2015-06-13T19:54:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29523739999999998318, 51.532786199999996768] },
            "properties": { "timestamp": "2015-06-13T19:54:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29522690000000001431, 51.532893100000002562] },
            "properties": { "timestamp": "2015-06-13T19:54:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29518780000000000019, 51.532998700000000269] },
            "properties": { "timestamp": "2015-06-13T19:54:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29525079999999997993, 51.533093899999997234] },
            "properties": { "timestamp": "2015-06-13T19:55:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29531239999999997492, 51.533186100000001773] },
            "properties": { "timestamp": "2015-06-13T19:55:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29533870000000000955, 51.533279299999996681] },
            "properties": { "timestamp": "2015-06-13T19:55:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29537360000000001392, 51.533369999999997901] },
            "properties": { "timestamp": "2015-06-13T19:55:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29535390000000000255, 51.533476200000002621] },
            "properties": { "timestamp": "2015-06-13T19:55:36+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29540939999999998866, 51.533560999999998842] },
            "properties": { "timestamp": "2015-06-13T19:55:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29541370000000000129, 51.533657400000002724] },
            "properties": { "timestamp": "2015-06-13T19:55:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2954887999999999959, 51.533744699999999739] },
            "properties": { "timestamp": "2015-06-13T19:56:03+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29554449999999998777, 51.533842499999998665] },
            "properties": { "timestamp": "2015-06-13T19:56:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29568270000000002051, 51.533913300000001811] },
            "properties": { "timestamp": "2015-06-13T19:56:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29584209999999999674, 51.533905599999997094] },
            "properties": { "timestamp": "2015-06-13T19:56:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2959970000000000101, 51.533951100000003009] },
            "properties": { "timestamp": "2015-06-13T19:56:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29616579999999997908, 51.533958200000000716] },
            "properties": { "timestamp": "2015-06-13T19:56:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29630060000000002507, 51.533881899999997245] },
            "properties": { "timestamp": "2015-06-13T19:57:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29647689999999998767, 51.534064800000003004] },
            "properties": { "timestamp": "2015-06-13T19:59:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29668780000000000152, 51.534077699999997435] },
            "properties": { "timestamp": "2015-06-13T19:59:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29647149999999999892, 51.533839499999999134] },
            "properties": { "timestamp": "2015-06-13T19:59:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29618739999999998957, 51.533953500000002634] },
            "properties": { "timestamp": "2015-06-13T20:19:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29641909999999999092, 51.533925799999998674] },
            "properties": { "timestamp": "2015-06-13T20:20:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29633359999999997481, 51.534005100000001676] },
            "properties": { "timestamp": "2015-06-13T20:20:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29627989999999998494, 51.534099300000001165] },
            "properties": { "timestamp": "2015-06-13T20:20:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29616350000000002396, 51.534190399999999954] },
            "properties": { "timestamp": "2015-06-13T20:20:31+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29608719999999999484, 51.534286600000001499] },
            "properties": { "timestamp": "2015-06-13T20:20:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29605310000000001347, 51.534384000000002857] },
            "properties": { "timestamp": "2015-06-13T20:20:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29612680000000002334, 51.534475100000001646] },
            "properties": { "timestamp": "2015-06-13T20:20:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29621480000000000032, 51.534556999999999505] },
            "properties": { "timestamp": "2015-06-13T20:21:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29628599999999999381, 51.534642400000002738] },
            "properties": { "timestamp": "2015-06-13T20:21:11+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2963875999999999733, 51.534721199999999897] },
            "properties": { "timestamp": "2015-06-13T20:21:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29645100000000002005, 51.534818100000002516] },
            "properties": { "timestamp": "2015-06-13T20:21:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29649910000000001542, 51.534905399999999531] },
            "properties": { "timestamp": "2015-06-13T20:21:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29659950000000001591, 51.534982300000002908] },
            "properties": { "timestamp": "2015-06-13T20:21:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29670069999999998389, 51.535058100000000536] },
            "properties": { "timestamp": "2015-06-13T20:21:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29680390000000000938, 51.535126200000000551] },
            "properties": { "timestamp": "2015-06-13T20:22:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29691689999999998362, 51.535199699999999723] },
            "properties": { "timestamp": "2015-06-13T20:22:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29699999999999998623, 51.535288700000002393] },
            "properties": { "timestamp": "2015-06-13T20:22:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29712470000000001935, 51.535349400000001197] },
            "properties": { "timestamp": "2015-06-13T20:22:25+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29727629999999999333, 51.535371499999996558] },
            "properties": { "timestamp": "2015-06-13T20:22:36+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29739189999999998681, 51.535313600000002054] },
            "properties": { "timestamp": "2015-06-13T20:22:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29728749999999998233, 51.53561690000000084] },
            "properties": { "timestamp": "2015-06-13T20:23:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29742229999999997281, 51.535301099999998087] },
            "properties": { "timestamp": "2015-06-13T20:23:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29757970000000000255, 51.535247800000000495] },
            "properties": { "timestamp": "2015-06-13T20:23:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29773589999999999778, 51.535232700000001671] },
            "properties": { "timestamp": "2015-06-13T20:23:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29789870000000001626, 51.535226999999999009] },
            "properties": { "timestamp": "2015-06-13T20:23:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29805999999999999162, 51.535223899999998309] },
            "properties": { "timestamp": "2015-06-13T20:23:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29820180000000001685, 51.53520610000000346] },
            "properties": { "timestamp": "2015-06-13T20:23:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29837239999999998208, 51.535229399999998634] },
            "properties": { "timestamp": "2015-06-13T20:23:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29851909999999998169, 51.535217199999998172] },
            "properties": { "timestamp": "2015-06-13T20:24:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2986797999999999953, 51.535209399999999391] },
            "properties": { "timestamp": "2015-06-13T20:24:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2988432999999999784, 51.535155099999997219] },
            "properties": { "timestamp": "2015-06-13T20:24:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29901640000000001551, 51.535150000000001569] },
            "properties": { "timestamp": "2015-06-13T20:24:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29916130000000001887, 51.535128700000001345] },
            "properties": { "timestamp": "2015-06-13T20:24:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2992974999999999941, 51.535084500000003516] },
            "properties": { "timestamp": "2015-06-13T20:24:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29941669999999998009, 51.535024900000003356] },
            "properties": { "timestamp": "2015-06-13T20:25:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29951590000000000158, 51.535102600000001871] },
            "properties": { "timestamp": "2015-06-13T20:25:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29961779999999998969, 51.535169000000003336] },
            "properties": { "timestamp": "2015-06-13T20:25:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29970279999999999143, 51.535244900000002133] },
            "properties": { "timestamp": "2015-06-13T20:25:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.2997961000000000098, 51.535322399999998311] },
            "properties": { "timestamp": "2015-06-13T20:25:43+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29984230000000000604, 51.535421700000000556] },
            "properties": { "timestamp": "2015-06-13T20:25:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.29992410000000002679, 51.535509300000001076] },
            "properties": { "timestamp": "2015-06-13T20:25:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.3000628000000000184, 51.535548400000003255] },
            "properties": { "timestamp": "2015-06-13T20:26:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30016959999999998088, 51.535619199999999296] },
            "properties": { "timestamp": "2015-06-13T20:26:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30031980000000002562, 51.535618800000001727] },
            "properties": { "timestamp": "2015-06-13T20:26:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30048489999999999922, 51.535648700000002975] },
            "properties": { "timestamp": "2015-06-13T20:26:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.3006468999999999947, 51.535677599999999643] },
            "properties": { "timestamp": "2015-06-13T20:27:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30082150000000001944, 51.535689200000000199] },
            "properties": { "timestamp": "2015-06-13T20:27:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30096689999999998166, 51.535676000000002261] },
            "properties": { "timestamp": "2015-06-13T20:27:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30109839999999998827, 51.535725300000002846] },
            "properties": { "timestamp": "2015-06-13T20:27:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30125449999999998063, 51.535762099999999464] },
            "properties": { "timestamp": "2015-06-13T20:27:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-0.30140410000000000812, 51.535797000000002299] },
            "properties": { "timestamp": "2015-06-13T20:28:07+02:00" }
          }]
        },
        "userId": "oC57PXAg7veCnigfA",
        "begin": "2015-06-13T19:39:08+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[-0.29575800000000002088, 51.530031000000001029], [-0.29587279999999999136, 51.530051100000001441], [-0.29605700000000001459, 51.529730499999999438], [-0.29583860000000000712, 51.530040599999999529], [-0.29600809999999999622, 51.530100599999997257], [-0.29619909999999999295, 51.530127200000002574], [-0.29635210000000000719, 51.530172600000000216], [-0.29649900000000001254, 51.530205700000003333], [-0.29665289999999999715, 51.530197899999997446], [-0.29680990000000001539, 51.530199500000001933], [-0.29696030000000001037, 51.530225500000000238], [-0.29708459999999997647, 51.530287299999997686], [-0.29724689999999998058, 51.530300799999999128], [-0.29739209999999999257, 51.53031750000000244], [-0.29754249999999998755, 51.530337899999999252], [-0.29768509999999998028, 51.530364900000002137], [-0.29783789999999998876, 51.530401099999998848], [-0.29798900000000000388, 51.530415900000001272], [-0.29813830000000002274, 51.530422199999996735], [-0.2982828000000000146, 51.530470200000003445], [-0.29843239999999998657, 51.530505200000000343], [-0.29858800000000002006, 51.530546000000001072], [-0.29875790000000002067, 51.53055880000000144], [-0.29893229999999998414, 51.530604799999998988], [-0.2990639999999999965, 51.530663799999999242], [-0.29921360000000002399, 51.530696700000000021], [-0.2993474999999999886, 51.53073100000000295], [-0.29951349999999998808, 51.530770900000000267], [-0.29971399999999998043, 51.530799700000002872], [-0.29989050000000000429, 51.530813500000000715], [-0.3000448000000000004, 51.530841999999999814], [-0.30017169999999998575, 51.53076250000000158], [-0.30027130000000001875, 51.530678799999996897], [-0.30003669999999998952, 51.530717799999997908], [-0.30030919999999999837, 51.5309991000000025], [-0.30017840000000001188, 51.531293099999999185], [-0.30033850000000000824, 51.53123560000000225], [-0.30022939999999997962, 51.531149300000002711], [-0.30007410000000001027, 51.531103899999997964], [-0.29992809999999997528, 51.531095899999996846], [-0.29977199999999998292, 51.531087499999998158], [-0.29962080000000002045, 51.531056200000001866], [-0.29951200000000000045, 51.530993199999997501], [-0.29936220000000002273, 51.530973899999999333], [-0.29921310000000000962, 51.530984199999998907], [-0.29906260000000001176, 51.531003699999999412], [-0.2989101000000000119, 51.531029799999998886], [-0.29874040000000001704, 51.531002899999997169], [-0.29857349999999999168, 51.531041700000002947], [-0.29796640000000002013, 51.531662900000000604], [-0.29824469999999997372, 51.531451699999998084], [-0.29824610000000001397, 51.531582700000001296], [-0.29809809999999997698, 51.53159920000000227], [-0.29795880000000002363, 51.531646000000002061], [-0.29781760000000001565, 51.531670699999999385], [-0.29766910000000001979, 51.531684599999998397], [-0.29754779999999997342, 51.531785999999996761], [-0.29736259999999997694, 51.531789600000003304], [-0.29720489999999999409, 51.531742500000000007], [-0.29701040000000000774, 51.531745800000003044], [-0.29684159999999998325, 51.531741500000002532], [-0.29667130000000002665, 51.531756399999999019], [-0.29650819999999999954, 51.531717399999998008], [-0.29632859999999999756, 51.53168269999999751], [-0.29616619999999999058, 51.531691199999997366], [-0.29599829999999999197, 51.531729499999997302], [-0.29580269999999997399, 51.531734800000002394], [-0.29560809999999998476, 51.531695300000002646], [-0.29541180000000000216, 51.531708500000000583], [-0.29523880000000002344, 51.531737200000002019], [-0.2950757999999999992, 51.531757599999998831], [-0.29491580000000000572, 51.531780400000002373], [-0.29477940000000002474, 51.531844300000003045], [-0.29466229999999998812, 51.53192539999999866], [-0.29468719999999998249, 51.532038999999997486], [-0.29478619999999999823, 51.532137099999999919], [-0.29484690000000002286, 51.532251700000003325], [-0.29492930000000000534, 51.532358700000003182], [-0.29503069999999997908, 51.532471100000002195], [-0.29507790000000000408, 51.532590900000002421], [-0.29521629999999998706, 51.532670199999998317], [-0.29523739999999998318, 51.532786199999996768], [-0.29522690000000001431, 51.532893100000002562], [-0.29518780000000000019, 51.532998700000000269], [-0.29525079999999997993, 51.533093899999997234], [-0.29531239999999997492, 51.533186100000001773], [-0.29533870000000000955, 51.533279299999996681], [-0.29537360000000001392, 51.533369999999997901], [-0.29535390000000000255, 51.533476200000002621], [-0.29540939999999998866, 51.533560999999998842], [-0.29541370000000000129, 51.533657400000002724], [-0.2954887999999999959, 51.533744699999999739], [-0.29554449999999998777, 51.533842499999998665], [-0.29568270000000002051, 51.533913300000001811], [-0.29584209999999999674, 51.533905599999997094], [-0.2959970000000000101, 51.533951100000003009], [-0.29616579999999997908, 51.533958200000000716], [-0.29630060000000002507, 51.533881899999997245], [-0.29647689999999998767, 51.534064800000003004], [-0.29668780000000000152, 51.534077699999997435], [-0.29647149999999999892, 51.533839499999999134], [-0.29618739999999998957, 51.533953500000002634], [-0.29641909999999999092, 51.533925799999998674], [-0.29633359999999997481, 51.534005100000001676], [-0.29627989999999998494, 51.534099300000001165], [-0.29616350000000002396, 51.534190399999999954], [-0.29608719999999999484, 51.534286600000001499], [-0.29605310000000001347, 51.534384000000002857], [-0.29612680000000002334, 51.534475100000001646], [-0.29621480000000000032, 51.534556999999999505], [-0.29628599999999999381, 51.534642400000002738], [-0.2963875999999999733, 51.534721199999999897], [-0.29645100000000002005, 51.534818100000002516], [-0.29649910000000001542, 51.534905399999999531], [-0.29659950000000001591, 51.534982300000002908], [-0.29670069999999998389, 51.535058100000000536], [-0.29680390000000000938, 51.535126200000000551], [-0.29691689999999998362, 51.535199699999999723], [-0.29699999999999998623, 51.535288700000002393], [-0.29712470000000001935, 51.535349400000001197], [-0.29727629999999999333, 51.535371499999996558], [-0.29739189999999998681, 51.535313600000002054], [-0.29728749999999998233, 51.53561690000000084], [-0.29742229999999997281, 51.535301099999998087], [-0.29757970000000000255, 51.535247800000000495], [-0.29773589999999999778, 51.535232700000001671], [-0.29789870000000001626, 51.535226999999999009], [-0.29805999999999999162, 51.535223899999998309], [-0.29820180000000001685, 51.53520610000000346], [-0.29837239999999998208, 51.535229399999998634], [-0.29851909999999998169, 51.535217199999998172], [-0.2986797999999999953, 51.535209399999999391], [-0.2988432999999999784, 51.535155099999997219], [-0.29901640000000001551, 51.535150000000001569], [-0.29916130000000001887, 51.535128700000001345], [-0.2992974999999999941, 51.535084500000003516], [-0.29941669999999998009, 51.535024900000003356], [-0.29951590000000000158, 51.535102600000001871], [-0.29961779999999998969, 51.535169000000003336], [-0.29970279999999999143, 51.535244900000002133], [-0.2997961000000000098, 51.535322399999998311], [-0.29984230000000000604, 51.535421700000000556], [-0.29992410000000002679, 51.535509300000001076], [-0.3000628000000000184, 51.535548400000003255], [-0.30016959999999998088, 51.535619199999999296], [-0.30031980000000002562, 51.535618800000001727], [-0.30048489999999999922, 51.535648700000002975], [-0.3006468999999999947, 51.535677599999999643], [-0.30082150000000001944, 51.535689200000000199], [-0.30096689999999998166, 51.535676000000002261], [-0.30109839999999998827, 51.535725300000002846], [-0.30125449999999998063, 51.535762099999999464], [-0.30140410000000000812, 51.535797000000002299]]
          },
          "properties": { "userId": "oC57PXAg7veCnigfA" }
        }
      }
      , {
        "_id": "B9oYPjhgYs7A6PCgr",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2399199102141329476, 51.476011150564509933] },
            "properties": { "timestamp": "2015-06-14T14:29:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2399199102141329476, 51.476011150564509933] },
            "properties": { "timestamp": "2015-06-14T14:29:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2398013901032873818, 51.476076948504406516] },
            "properties": { "timestamp": "2015-06-14T14:29:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2398551181026169488, 51.476162821102398937] },
            "properties": { "timestamp": "2015-06-14T14:29:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2399412840672203728, 51.47623989270206124] },
            "properties": { "timestamp": "2015-06-14T14:30:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2399412840672203728, 51.47623989270206124] },
            "properties": { "timestamp": "2015-06-14T14:30:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2400396876104542443, 51.476317006211239402] },
            "properties": { "timestamp": "2015-06-14T14:30:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2401350736685472498, 51.476398226852971618] },
            "properties": { "timestamp": "2015-06-14T14:30:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.240185868001766778, 51.47649516356315047] },
            "properties": { "timestamp": "2015-06-14T14:30:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2402380872585254679, 51.476591429721075599] },
            "properties": { "timestamp": "2015-06-14T14:30:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2402912285246330271, 51.476685516584176128] },
            "properties": { "timestamp": "2015-06-14T14:30:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2403716947950798044, 51.476773442748445575] },
            "properties": { "timestamp": "2015-06-14T14:30:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2404403425820547113, 51.476852651733416621] },
            "properties": { "timestamp": "2015-06-14T14:30:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2404995188184457788, 51.476945816587168281] },
            "properties": { "timestamp": "2015-06-14T14:30:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2405876126207786569, 51.477039777721721237] },
            "properties": { "timestamp": "2015-06-14T14:30:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406243253566699991, 51.477140821564454143] },
            "properties": { "timestamp": "2015-06-14T14:31:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406883630969005594, 51.477229166823882167] },
            "properties": { "timestamp": "2015-06-14T14:31:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2407228965379673014, 51.477330755490321224] },
            "properties": { "timestamp": "2015-06-14T14:31:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2407666500725227365, 51.477428739938396518] },
            "properties": { "timestamp": "2015-06-14T14:31:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2407400794394689569, 51.477517588112014835] },
            "properties": { "timestamp": "2015-06-14T14:31:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406554222174364099, 51.477592312778789108] },
            "properties": { "timestamp": "2015-06-14T14:31:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406772989847141275, 51.477705175104993884] },
            "properties": { "timestamp": "2015-06-14T14:31:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406958229907232294, 51.47779603493537337] },
            "properties": { "timestamp": "2015-06-14T14:31:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2407017741419750223, 51.477902568924683635] },
            "properties": { "timestamp": "2015-06-14T14:32:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406971640952306757, 51.477997116792458598] },
            "properties": { "timestamp": "2015-06-14T14:32:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406557574935632715, 51.478108051280933921] },
            "properties": { "timestamp": "2015-06-14T14:32:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406869381733613977, 51.478202221963066165] },
            "properties": { "timestamp": "2015-06-14T14:32:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2408130858160930643, 51.478246771778422897] },
            "properties": { "timestamp": "2015-06-14T14:32:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2409487050094085703, 51.478282143409806793] },
            "properties": { "timestamp": "2015-06-14T14:32:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2410224657573181162, 51.478203982162732188] },
            "properties": { "timestamp": "2015-06-14T14:32:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2410929575629916499, 51.478109811480599944] },
            "properties": { "timestamp": "2015-06-14T14:32:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2411765251376118968, 51.478021256673592632] },
            "properties": { "timestamp": "2015-06-14T14:32:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2412668820538010905, 51.477941880050558154] },
            "properties": { "timestamp": "2015-06-14T14:32:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2413817979462828944, 51.477886894765752857] },
            "properties": { "timestamp": "2015-06-14T14:32:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2414812073178973506, 51.477817115421849792] },
            "properties": { "timestamp": "2015-06-14T14:33:03+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2415864840217318843, 51.477743731859582965] },
            "properties": { "timestamp": "2015-06-14T14:33:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2417206782915082286, 51.477679861757415836] },
            "properties": { "timestamp": "2015-06-14T14:33:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2418043296851601909, 51.47759755146827132] },
            "properties": { "timestamp": "2015-06-14T14:33:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2418684512444224666, 51.477515827912348811] },
            "properties": { "timestamp": "2015-06-14T14:33:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2419842891462531398, 51.477455771576124732] },
            "properties": { "timestamp": "2015-06-14T14:33:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2420934215255474697, 51.477395757149416511] },
            "properties": { "timestamp": "2015-06-14T14:33:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2421621531315540921, 51.477310429375130241] },
            "properties": { "timestamp": "2015-06-14T14:33:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.242258964113185371, 51.477243499878305499] },
            "properties": { "timestamp": "2015-06-14T14:33:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.242341693497488464, 51.477168188478309219] },
            "properties": { "timestamp": "2015-06-14T14:33:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2424394264884686123, 51.477091871249932353] },
            "properties": { "timestamp": "2015-06-14T14:34:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2425414342500662457, 51.477028001147765224] },
            "properties": { "timestamp": "2015-06-14T14:34:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2426239121772741925, 51.476930016699689929] },
            "properties": { "timestamp": "2015-06-14T14:34:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2426996007629131924, 51.476841461892682617] },
            "properties": { "timestamp": "2015-06-14T14:34:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2428564261712526928, 51.476803701418894832] },
            "properties": { "timestamp": "2015-06-14T14:34:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2429802268810972166, 51.476732706699031894] },
            "properties": { "timestamp": "2015-06-14T14:34:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2430622857131465864, 51.476656892384845321] },
            "properties": { "timestamp": "2015-06-14T14:34:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2431336157091363859, 51.476572612348455493] },
            "properties": { "timestamp": "2015-06-14T14:34:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2432269901104673337, 51.476491475525754993] },
            "properties": { "timestamp": "2015-06-14T14:34:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.243333021185587306, 51.476407614584523742] },
            "properties": { "timestamp": "2015-06-14T14:34:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2434335202046140623, 51.476333267103392188] },
            "properties": { "timestamp": "2015-06-14T14:34:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2435395512797340345, 51.476263110573846404] },
            "properties": { "timestamp": "2015-06-14T14:35:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2436595801331504774, 51.476191654849309032] },
            "properties": { "timestamp": "2015-06-14T14:35:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2438032459535106611, 51.476139728959161346] },
            "properties": { "timestamp": "2015-06-14T14:35:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2439065948196157407, 51.476062824997562473] },
            "properties": { "timestamp": "2015-06-14T14:35:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2439246159114345502, 51.475968863863009517] },
            "properties": { "timestamp": "2015-06-14T14:35:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2437925171174510908, 51.475902143913764064] },
            "properties": { "timestamp": "2015-06-14T14:35:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2436421457745536756, 51.475890618796903198] },
            "properties": { "timestamp": "2015-06-14T14:35:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2434933669932588529, 51.475909561898070876] },
            "properties": { "timestamp": "2015-06-14T14:35:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2433341946520313215, 51.475918111439305846] },
            "properties": { "timestamp": "2015-06-14T14:35:52+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2431878466226562452, 51.475882655988890235] },
            "properties": { "timestamp": "2015-06-14T14:35:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2430507186867698621, 51.475910735364514892] },
            "properties": { "timestamp": "2015-06-14T14:36:03+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2429042868383621823, 51.475947951014596526] },
            "properties": { "timestamp": "2015-06-14T14:36:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2427586093612408291, 51.475932863588887756] },
            "properties": { "timestamp": "2015-06-14T14:36:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2425941564210152279, 51.475923894952494209] },
            "properties": { "timestamp": "2015-06-14T14:36:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2424475569345450054, 51.475917650434631412] },
            "properties": { "timestamp": "2015-06-14T14:36:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2422952577539181362, 51.475915932144481246] },
            "properties": { "timestamp": "2015-06-14T14:36:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2421314753659462582, 51.475953566889721458] },
            "properties": { "timestamp": "2015-06-14T14:36:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2419762425192084621, 51.475960188593226974] },
            "properties": { "timestamp": "2015-06-14T14:36:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2418417967923369716, 51.475898916881043021] },
            "properties": { "timestamp": "2015-06-14T14:36:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2416472528197255443, 51.475934037055331771] },
            "properties": { "timestamp": "2015-06-14T14:36:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2415158245779958079, 51.47598064043696553] },
            "properties": { "timestamp": "2015-06-14T14:37:03+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2413654532350983928, 51.475955788094061916] },
            "properties": { "timestamp": "2015-06-14T14:37:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2412055265225854228, 51.475960272412258689] },
            "properties": { "timestamp": "2015-06-14T14:37:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2410481982000547418, 51.4759913692730251] },
            "properties": { "timestamp": "2015-06-14T14:37:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2409043647416311273, 51.475955368998903339] },
            "properties": { "timestamp": "2015-06-14T14:37:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2407492157139259348, 51.47596735512043864] },
            "properties": { "timestamp": "2015-06-14T14:37:36+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2406144347109275827, 51.47602757909472615] },
            "properties": { "timestamp": "2015-06-14T14:37:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2404604591496664057, 51.475987597416597907] },
            "properties": { "timestamp": "2015-06-14T14:37:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.24032064900476513, 51.475959727588552539] },
            "properties": { "timestamp": "2015-06-14T14:37:55+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2401473112471776972, 51.47597209089573056] },
            "properties": { "timestamp": "2015-06-14T14:37:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2399898152865835854, 51.475947364281374519] },
            "properties": { "timestamp": "2015-06-14T14:38:04+02:00" }
          }]
        },
        "userId": "eWB38jFoBPuXsksot",
        "begin": "2015-06-14T14:29:42+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2399199102141329476, 51.476011150564509933], [7.2399199102141329476, 51.476011150564509933], [7.2398013901032873818, 51.476076948504406516], [7.2398551181026169488, 51.476162821102398937], [7.2399412840672203728, 51.47623989270206124], [7.2399412840672203728, 51.47623989270206124], [7.2400396876104542443, 51.476317006211239402], [7.2401350736685472498, 51.476398226852971618], [7.240185868001766778, 51.47649516356315047], [7.2402380872585254679, 51.476591429721075599], [7.2402912285246330271, 51.476685516584176128], [7.2403716947950798044, 51.476773442748445575], [7.2404403425820547113, 51.476852651733416621], [7.2404995188184457788, 51.476945816587168281], [7.2405876126207786569, 51.477039777721721237], [7.2406243253566699991, 51.477140821564454143], [7.2406883630969005594, 51.477229166823882167], [7.2407228965379673014, 51.477330755490321224], [7.2407666500725227365, 51.477428739938396518], [7.2407400794394689569, 51.477517588112014835], [7.2406554222174364099, 51.477592312778789108], [7.2406772989847141275, 51.477705175104993884], [7.2406958229907232294, 51.47779603493537337], [7.2407017741419750223, 51.477902568924683635], [7.2406971640952306757, 51.477997116792458598], [7.2406557574935632715, 51.478108051280933921], [7.2406869381733613977, 51.478202221963066165], [7.2408130858160930643, 51.478246771778422897], [7.2409487050094085703, 51.478282143409806793], [7.2410224657573181162, 51.478203982162732188], [7.2410929575629916499, 51.478109811480599944], [7.2411765251376118968, 51.478021256673592632], [7.2412668820538010905, 51.477941880050558154], [7.2413817979462828944, 51.477886894765752857], [7.2414812073178973506, 51.477817115421849792], [7.2415864840217318843, 51.477743731859582965], [7.2417206782915082286, 51.477679861757415836], [7.2418043296851601909, 51.47759755146827132], [7.2418684512444224666, 51.477515827912348811], [7.2419842891462531398, 51.477455771576124732], [7.2420934215255474697, 51.477395757149416511], [7.2421621531315540921, 51.477310429375130241], [7.242258964113185371, 51.477243499878305499], [7.242341693497488464, 51.477168188478309219], [7.2424394264884686123, 51.477091871249932353], [7.2425414342500662457, 51.477028001147765224], [7.2426239121772741925, 51.476930016699689929], [7.2426996007629131924, 51.476841461892682617], [7.2428564261712526928, 51.476803701418894832], [7.2429802268810972166, 51.476732706699031894], [7.2430622857131465864, 51.476656892384845321], [7.2431336157091363859, 51.476572612348455493], [7.2432269901104673337, 51.476491475525754993], [7.243333021185587306, 51.476407614584523742], [7.2434335202046140623, 51.476333267103392188], [7.2435395512797340345, 51.476263110573846404], [7.2436595801331504774, 51.476191654849309032], [7.2438032459535106611, 51.476139728959161346], [7.2439065948196157407, 51.476062824997562473], [7.2439246159114345502, 51.475968863863009517], [7.2437925171174510908, 51.475902143913764064], [7.2436421457745536756, 51.475890618796903198], [7.2434933669932588529, 51.475909561898070876], [7.2433341946520313215, 51.475918111439305846], [7.2431878466226562452, 51.475882655988890235], [7.2430507186867698621, 51.475910735364514892], [7.2429042868383621823, 51.475947951014596526], [7.2427586093612408291, 51.475932863588887756], [7.2425941564210152279, 51.475923894952494209], [7.2424475569345450054, 51.475917650434631412], [7.2422952577539181362, 51.475915932144481246], [7.2421314753659462582, 51.475953566889721458], [7.2419762425192084621, 51.475960188593226974], [7.2418417967923369716, 51.475898916881043021], [7.2416472528197255443, 51.475934037055331771], [7.2415158245779958079, 51.47598064043696553], [7.2413654532350983928, 51.475955788094061916], [7.2412055265225854228, 51.475960272412258689], [7.2410481982000547418, 51.4759913692730251], [7.2409043647416311273, 51.475955368998903339], [7.2407492157139259348, 51.47596735512043864], [7.2406144347109275827, 51.47602757909472615], [7.2404604591496664057, 51.475987597416597907], [7.24032064900476513, 51.475959727588552539], [7.2401473112471776972, 51.47597209089573056], [7.2399898152865835854, 51.475947364281374519]]
          },
          "properties": { "userId": "eWB38jFoBPuXsksot" }
        },
        "end": "2015-06-14T14:38:09+02:00",
        "stats": { "distance": 911, "duration": 507, "area": 41.890000000000000568 }
      }
      , {
        "_id": "G6xEGPnSJXxDTQRnQ",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169615008023725977, 44.990535615985272955] },
            "properties": { "timestamp": "2015-06-15T23:39:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169615008023725977, 44.990535615985272955] },
            "properties": { "timestamp": "2015-06-15T23:39:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169761858967291346, 44.990525851068078111] },
            "properties": { "timestamp": "2015-06-15T23:39:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169892616656767359, 44.990558372852383684] },
            "properties": { "timestamp": "2015-06-15T23:39:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170024799269782534, 44.99055862430947883] },
            "properties": { "timestamp": "2015-06-15T23:39:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170158490625368586, 44.99055753466206653] },
            "properties": { "timestamp": "2015-06-15T23:39:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170296540570603838, 44.990550745320497583] },
            "properties": { "timestamp": "2015-06-15T23:39:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170323278841721049, 44.990640180227337908] },
            "properties": { "timestamp": "2015-06-15T23:40:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170309197244392863, 44.990741265979586672] },
            "properties": { "timestamp": "2015-06-15T23:40:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170308778149234286, 44.990831706714807581] },
            "properties": { "timestamp": "2015-06-15T23:40:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170315902766930094, 44.990934846033333372] },
            "properties": { "timestamp": "2015-06-15T23:40:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170353034597980013, 44.99102604113983972] },
            "properties": { "timestamp": "2015-06-15T23:40:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170315483671771517, 44.99112318739759786] },
            "properties": { "timestamp": "2015-06-15T23:40:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170297211122857561, 44.991217274260698389] },
            "properties": { "timestamp": "2015-06-15T23:40:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170281285506831637, 44.991321670864699911] },
            "properties": { "timestamp": "2015-06-15T23:40:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.1703034137312045, 44.991428288673041891] },
            "properties": { "timestamp": "2015-06-15T23:40:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.17032998436425828, 44.991522836540816854] },
            "properties": { "timestamp": "2015-06-15T23:40:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170323446479784479, 44.99161625285166366] },
            "properties": { "timestamp": "2015-06-15T23:41:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170205513102160921, 44.991670232308088373] },
            "properties": { "timestamp": "2015-06-15T23:41:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.170064445671783915, 44.991656108801244329] },
            "properties": { "timestamp": "2015-06-15T23:41:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169937040743576517, 44.991648313631294798] },
            "properties": { "timestamp": "2015-06-15T23:41:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16979270437096261, 44.991648732726453375] },
            "properties": { "timestamp": "2015-06-15T23:41:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169644679960953226, 44.991653217044650148] },
            "properties": { "timestamp": "2015-06-15T23:41:34+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169512664986001482, 44.991651875940142702] },
            "properties": { "timestamp": "2015-06-15T23:41:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169363467109548083, 44.991660341662345957] },
            "properties": { "timestamp": "2015-06-15T23:41:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169225668621407976, 44.991662520957170557] },
            "properties": { "timestamp": "2015-06-15T23:41:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169086612847792139, 44.991668346379874777] },
            "properties": { "timestamp": "2015-06-15T23:41:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168941605922924509, 44.991668975022612642] },
            "properties": { "timestamp": "2015-06-15T23:42:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168811937880860796, 44.991654767696736883] },
            "properties": { "timestamp": "2015-06-15T23:42:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168678246525274744, 44.991666586180208753] },
            "properties": { "timestamp": "2015-06-15T23:42:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168549919587718477, 44.991658204277037214] },
            "properties": { "timestamp": "2015-06-15T23:42:25+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168421592650162211, 44.991652881768523287] },
            "properties": { "timestamp": "2015-06-15T23:42:31+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168287230742322436, 44.991647265893398355] },
            "properties": { "timestamp": "2015-06-15T23:42:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168154545215116968, 44.991656527896402906] },
            "properties": { "timestamp": "2015-06-15T23:42:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168006269348012438, 44.99164936136919124] },
            "properties": { "timestamp": "2015-06-15T23:42:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167865369555698862, 44.991639386904417108] },
            "properties": { "timestamp": "2015-06-15T23:42:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16773151056204938, 44.991627903697072099] },
            "properties": { "timestamp": "2015-06-15T23:43:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167582815599786272, 44.991633226205586027] },
            "properties": { "timestamp": "2015-06-15T23:43:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16745549449061059, 44.991628951434968542] },
            "properties": { "timestamp": "2015-06-15T23:43:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167315265250550738, 44.991644667503415178] },
            "properties": { "timestamp": "2015-06-15T23:43:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167178975504981508, 44.991656863172529768] },
            "properties": { "timestamp": "2015-06-15T23:43:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167035644960748186, 44.991660718847988676] },
            "properties": { "timestamp": "2015-06-15T23:43:34+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.166895248082624903, 44.991653091316102575] },
            "properties": { "timestamp": "2015-06-15T23:43:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.166797934186803332, 44.991591442418275903] },
            "properties": { "timestamp": "2015-06-15T23:43:48+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16682852813337945, 44.991487129633306097] },
            "properties": { "timestamp": "2015-06-15T23:43:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.166834395465599528, 44.991394174327133726] },
            "properties": { "timestamp": "2015-06-15T23:44:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.166878484276281824, 44.991300087464033197] },
            "properties": { "timestamp": "2015-06-15T23:44:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16689348788295888, 44.991207760800598692] },
            "properties": { "timestamp": "2015-06-15T23:44:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.166905641642557612, 44.991115392227648329] },
            "properties": { "timestamp": "2015-06-15T23:44:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.166942941111670962, 44.991025035311459135] },
            "properties": { "timestamp": "2015-06-15T23:44:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.166897343558417788, 44.990922566545187067] },
            "properties": { "timestamp": "2015-06-15T23:44:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167025419038878908, 44.990896917921482157] },
            "properties": { "timestamp": "2015-06-15T23:44:39+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167154248890625468, 44.990917327855704855] },
            "properties": { "timestamp": "2015-06-15T23:44:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167283330199467173, 44.990911670071064066] },
            "properties": { "timestamp": "2015-06-15T23:44:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167421883058892718, 44.990911837709127497] },
            "properties": { "timestamp": "2015-06-15T23:44:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167572170582758417, 44.990896582645355295] },
            "properties": { "timestamp": "2015-06-15T23:45:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167704772290932169, 44.990899306763886045] },
            "properties": { "timestamp": "2015-06-15T23:45:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167869309050189486, 44.990887530189930033] },
            "properties": { "timestamp": "2015-06-15T23:45:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.167998977092253199, 44.990865318146525453] },
            "properties": { "timestamp": "2015-06-15T23:45:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16813778140877389, 44.990838873242019247] },
            "properties": { "timestamp": "2015-06-15T23:45:30+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168264851060854426, 44.990866617341517042] },
            "properties": { "timestamp": "2015-06-15T23:45:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168406672862516871, 44.990873071406959127] },
            "properties": { "timestamp": "2015-06-15T23:45:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16856442028020524, 44.990862133023320268] },
            "properties": { "timestamp": "2015-06-15T23:45:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168685119685875407, 44.990894948174236845] },
            "properties": { "timestamp": "2015-06-15T23:45:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168822079983698359, 44.990850146901784967] },
            "properties": { "timestamp": "2015-06-15T23:46:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.168970439669834605, 44.990845662583588194] },
            "properties": { "timestamp": "2015-06-15T23:46:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169116536242114535, 44.990858528804956507] },
            "properties": { "timestamp": "2015-06-15T23:46:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169246874836431971, 44.990857983981250356] },
            "properties": { "timestamp": "2015-06-15T23:46:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169380817649113169, 44.99086464759427173] },
            "properties": { "timestamp": "2015-06-15T23:46:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169513838452445498, 44.990875837435005735] },
            "properties": { "timestamp": "2015-06-15T23:46:43+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169609224510537615, 44.990810500499783586] },
            "properties": { "timestamp": "2015-06-15T23:46:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.16957728945945405, 44.99071272559928758] },
            "properties": { "timestamp": "2015-06-15T23:46:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169567398813711634, 44.990616501350878309] },
            "properties": { "timestamp": "2015-06-15T23:47:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [-93.169635376048432818, 44.990535238799630235] },
            "properties": { "timestamp": "2015-06-15T23:47:10+02:00" }
          }]
        },
        "userId": "qDsE5pbfTNiMvdEev",
        "begin": "2015-06-15T23:39:16+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[-93.169615008023725977, 44.990535615985272955], [-93.169615008023725977, 44.990535615985272955], [-93.169761858967291346, 44.990525851068078111], [-93.169892616656767359, 44.990558372852383684], [-93.170024799269782534, 44.99055862430947883], [-93.170158490625368586, 44.99055753466206653], [-93.170296540570603838, 44.990550745320497583], [-93.170323278841721049, 44.990640180227337908], [-93.170309197244392863, 44.990741265979586672], [-93.170308778149234286, 44.990831706714807581], [-93.170315902766930094, 44.990934846033333372], [-93.170353034597980013, 44.99102604113983972], [-93.170315483671771517, 44.99112318739759786], [-93.170297211122857561, 44.991217274260698389], [-93.170281285506831637, 44.991321670864699911], [-93.1703034137312045, 44.991428288673041891], [-93.17032998436425828, 44.991522836540816854], [-93.170323446479784479, 44.99161625285166366], [-93.170205513102160921, 44.991670232308088373], [-93.170064445671783915, 44.991656108801244329], [-93.169937040743576517, 44.991648313631294798], [-93.16979270437096261, 44.991648732726453375], [-93.169644679960953226, 44.991653217044650148], [-93.169512664986001482, 44.991651875940142702], [-93.169363467109548083, 44.991660341662345957], [-93.169225668621407976, 44.991662520957170557], [-93.169086612847792139, 44.991668346379874777], [-93.168941605922924509, 44.991668975022612642], [-93.168811937880860796, 44.991654767696736883], [-93.168678246525274744, 44.991666586180208753], [-93.168549919587718477, 44.991658204277037214], [-93.168421592650162211, 44.991652881768523287], [-93.168287230742322436, 44.991647265893398355], [-93.168154545215116968, 44.991656527896402906], [-93.168006269348012438, 44.99164936136919124], [-93.167865369555698862, 44.991639386904417108], [-93.16773151056204938, 44.991627903697072099], [-93.167582815599786272, 44.991633226205586027], [-93.16745549449061059, 44.991628951434968542], [-93.167315265250550738, 44.991644667503415178], [-93.167178975504981508, 44.991656863172529768], [-93.167035644960748186, 44.991660718847988676], [-93.166895248082624903, 44.991653091316102575], [-93.166797934186803332, 44.991591442418275903], [-93.16682852813337945, 44.991487129633306097], [-93.166834395465599528, 44.991394174327133726], [-93.166878484276281824, 44.991300087464033197], [-93.16689348788295888, 44.991207760800598692], [-93.166905641642557612, 44.991115392227648329], [-93.166942941111670962, 44.991025035311459135], [-93.166897343558417788, 44.990922566545187067], [-93.167025419038878908, 44.990896917921482157], [-93.167154248890625468, 44.990917327855704855], [-93.167283330199467173, 44.990911670071064066], [-93.167421883058892718, 44.990911837709127497], [-93.167572170582758417, 44.990896582645355295], [-93.167704772290932169, 44.990899306763886045], [-93.167869309050189486, 44.990887530189930033], [-93.167998977092253199, 44.990865318146525453], [-93.16813778140877389, 44.990838873242019247], [-93.168264851060854426, 44.990866617341517042], [-93.168406672862516871, 44.990873071406959127], [-93.16856442028020524, 44.990862133023320268], [-93.168685119685875407, 44.990894948174236845], [-93.168822079983698359, 44.990850146901784967], [-93.168970439669834605, 44.990845662583588194], [-93.169116536242114535, 44.990858528804956507], [-93.169246874836431971, 44.990857983981250356], [-93.169380817649113169, 44.99086464759427173], [-93.169513838452445498, 44.990875837435005735], [-93.169609224510537615, 44.990810500499783586], [-93.16957728945945405, 44.99071272559928758], [-93.169567398813711634, 44.990616501350878309], [-93.169635376048432818, 44.990535238799630235]]
          },
          "properties": { "userId": "qDsE5pbfTNiMvdEev" }
        },
        "end": "2015-06-15T23:47:17+02:00",
        "stats": { "distance": 786, "duration": 481, "area": 29.839999999999999858 }
      }
      , {
        "_id": "Mnxo3FAo2YG5yKPS2",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366730298263963306, 52.535329599098950837] },
            "properties": { "timestamp": "2015-06-16T12:37:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366170795646835856, 52.538671013948075483] },
            "properties": { "timestamp": "2015-06-16T12:37:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36608102546386867, 52.538598468576125811] },
            "properties": { "timestamp": "2015-06-16T12:38:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366854842764666955, 52.538699135233215998] },
            "properties": { "timestamp": "2015-06-16T12:38:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366286382091571383, 52.53828171645527334] },
            "properties": { "timestamp": "2015-06-16T12:38:06+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36644320749991266, 52.538312226582817743] },
            "properties": { "timestamp": "2015-06-16T12:38:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366501210269859712, 52.538395416971795271] },
            "properties": { "timestamp": "2015-06-16T12:38:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366359891382387559, 52.538434560459606359] },
            "properties": { "timestamp": "2015-06-16T12:38:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366214130086232714, 52.538477769170455645] },
            "properties": { "timestamp": "2015-06-16T12:38:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366073649389077715, 52.538521187428884218] },
            "properties": { "timestamp": "2015-06-16T12:38:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365993769851852946, 52.538611544345073412] },
            "properties": { "timestamp": "2015-06-16T12:39:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36592746899776607, 52.538699344780795286] },
            "properties": { "timestamp": "2015-06-16T12:39:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365846415994097285, 52.538790330339722345] },
            "properties": { "timestamp": "2015-06-16T12:39:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.3659232780461803, 52.538872892085962008] },
            "properties": { "timestamp": "2015-06-16T12:39:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366026123998095088, 52.538938354749731729] },
            "properties": { "timestamp": "2015-06-16T12:39:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366158222792078547, 52.538987305064253519] },
            "properties": { "timestamp": "2015-06-16T12:39:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366289986309936921, 52.539033698898307989] },
            "properties": { "timestamp": "2015-06-16T12:39:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366450499755671899, 52.539023095790795992] },
            "properties": { "timestamp": "2015-06-16T12:39:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366605648783377092, 52.539042793263249109] },
            "properties": { "timestamp": "2015-06-16T12:40:01+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366734478635123651, 52.539099454928688715] },
            "properties": { "timestamp": "2015-06-16T12:40:12+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36682600901775686, 52.539173550952725122] },
            "properties": { "timestamp": "2015-06-16T12:40:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36692516693227617, 52.53924073190664501] },
            "properties": { "timestamp": "2015-06-16T12:40:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367074867722919862, 52.539250664461903284] },
            "properties": { "timestamp": "2015-06-16T12:40:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367161368963650148, 52.539329831537358473] },
            "properties": { "timestamp": "2015-06-16T12:40:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367291791376999299, 52.53938519400780649] },
            "properties": { "timestamp": "2015-06-16T12:40:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367439396691850106, 52.539406274494282911] },
            "properties": { "timestamp": "2015-06-16T12:40:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367544589576652925, 52.539469599772743891] },
            "properties": { "timestamp": "2015-06-16T12:40:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367637880158952157, 52.539546419915311048] },
            "properties": { "timestamp": "2015-06-16T12:40:58+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367772996438077371, 52.539596878972403715] },
            "properties": { "timestamp": "2015-06-16T12:41:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367846673366955201, 52.539686523426823328] },
            "properties": { "timestamp": "2015-06-16T12:41:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367895120767286699, 52.539777341347686956] },
            "properties": { "timestamp": "2015-06-16T12:41:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367949016404679696, 52.539876373533658693] },
            "properties": { "timestamp": "2015-06-16T12:41:30+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367850529042414109, 52.540133991327635954] },
            "properties": { "timestamp": "2015-06-16T12:42:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368834763155808432, 52.5404518852375233] },
            "properties": { "timestamp": "2015-06-16T12:42:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369704192880996985, 52.53969811615661456] },
            "properties": { "timestamp": "2015-06-16T12:43:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369490951312117843, 52.539736018565051268] },
            "properties": { "timestamp": "2015-06-16T12:44:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368948715303002217, 52.54035557141205004] },
            "properties": { "timestamp": "2015-06-16T12:47:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369454154757194786, 52.539694989149026583] },
            "properties": { "timestamp": "2015-06-16T12:47:09+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369177461426586362, 52.540624813181267427] },
            "properties": { "timestamp": "2015-06-16T13:18:42+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369170353281411678, 52.539797961616919508] },
            "properties": { "timestamp": "2015-06-16T13:19:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369402360336108515, 52.540575889193277703] },
            "properties": { "timestamp": "2015-06-16T13:19:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369500618921726698, 52.539904557046277489] },
            "properties": { "timestamp": "2015-06-16T13:20:20+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368629815134241312, 52.540594554697158003] },
            "properties": { "timestamp": "2015-06-16T13:20:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.369802616291917019, 52.539719627614594799] },
            "properties": { "timestamp": "2015-06-16T13:21:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368469951686792641, 52.540059727665536116] },
            "properties": { "timestamp": "2015-06-16T13:21:50+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368204999727540283, 52.539770384368054579] },
            "properties": { "timestamp": "2015-06-16T13:21:52+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368197288376622467, 52.53986660861646385] },
            "properties": { "timestamp": "2015-06-16T13:21:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368052281451753061, 52.539844354663543413] },
            "properties": { "timestamp": "2015-06-16T13:22:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368022190419367234, 52.539934418213121603] },
            "properties": { "timestamp": "2015-06-16T13:22:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368028979760936181, 52.540032947484903048] },
            "properties": { "timestamp": "2015-06-16T13:22:25+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.368155043584636132, 52.540240273859851072] },
            "properties": { "timestamp": "2015-06-16T13:22:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367998050538233201, 52.540239980493240068] },
            "properties": { "timestamp": "2015-06-16T13:22:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367874585104516427, 52.54018227108990402] },
            "properties": { "timestamp": "2015-06-16T13:22:41+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367731422198346536, 52.540145181168369959] },
            "properties": { "timestamp": "2015-06-16T13:22:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367664869887164514, 52.540026493419460962] },
            "properties": { "timestamp": "2015-06-16T13:22:56+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367641819653442781, 52.53992628776704521] },
            "properties": { "timestamp": "2015-06-16T13:23:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367600664508870523, 52.539839241702608774] },
            "properties": { "timestamp": "2015-06-16T13:23:05+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367483234045437257, 52.539770342458538721] },
            "properties": { "timestamp": "2015-06-16T13:23:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367385081959298532, 52.539694025230161856] },
            "properties": { "timestamp": "2015-06-16T13:23:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367276787770322244, 52.539631999146692465] },
            "properties": { "timestamp": "2015-06-16T13:23:30+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367241583777001779, 52.539531122942022989] },
            "properties": { "timestamp": "2015-06-16T13:23:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367148377013734262, 52.539445501801125715] },
            "properties": { "timestamp": "2015-06-16T13:23:47+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.367022564647129457, 52.539387163755051802] },
            "properties": { "timestamp": "2015-06-16T13:23:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366880323750308435, 52.539330585908643911] },
            "properties": { "timestamp": "2015-06-16T13:23:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366747973499229829, 52.539281509865574549] },
            "properties": { "timestamp": "2015-06-16T13:24:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366606906068852823, 52.539236834321670244] },
            "properties": { "timestamp": "2015-06-16T13:24:17+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366458965477875154, 52.539178999189786623] },
            "properties": { "timestamp": "2015-06-16T13:24:21+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366317562771371286, 52.539129336413495253] },
            "properties": { "timestamp": "2015-06-16T13:24:26+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36618236267321258, 52.539082397755734632] },
            "properties": { "timestamp": "2015-06-16T13:24:32+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36601497606687694, 52.539096311714999388] },
            "properties": { "timestamp": "2015-06-16T13:24:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365891510633160166, 52.539040907335035513] },
            "properties": { "timestamp": "2015-06-16T13:24:46+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365791179252196841, 52.538959854331366728] },
            "properties": { "timestamp": "2015-06-16T13:24:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365757148725320391, 52.538863252897314737] },
            "properties": { "timestamp": "2015-06-16T13:25:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365803081554700427, 52.538763759706668566] },
            "properties": { "timestamp": "2015-06-16T13:25:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365858569753696017, 52.538678851027540873] },
            "properties": { "timestamp": "2015-06-16T13:25:14+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.365940628585745387, 52.538586901549749086] },
            "properties": { "timestamp": "2015-06-16T13:25:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366046492022801928, 52.538522318985812376] },
            "properties": { "timestamp": "2015-06-16T13:25:30+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366205580544997744, 52.538516200196497152] },
            "properties": { "timestamp": "2015-06-16T13:25:45+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366335919139316957, 52.538449186880640696] },
            "properties": { "timestamp": "2015-06-16T13:25:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.36643247866385309, 52.538381083917371939] },
            "properties": { "timestamp": "2015-06-16T13:26:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366297613841823022, 52.538334983449928473] },
            "properties": { "timestamp": "2015-06-16T13:26:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [13.366203987983395152, 52.538261264611534784] },
            "properties": { "timestamp": "2015-06-16T13:26:30+02:00" }
          }]
        },
        "userId": "QWqh9kiyz9c32Avwb",
        "begin": "2015-06-16T12:37:54+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[13.366730298263963306, 52.535329599098950837], [13.366170795646835856, 52.538671013948075483], [13.36608102546386867, 52.538598468576125811], [13.366854842764666955, 52.538699135233215998], [13.366286382091571383, 52.53828171645527334], [13.36644320749991266, 52.538312226582817743], [13.366501210269859712, 52.538395416971795271], [13.366359891382387559, 52.538434560459606359], [13.366214130086232714, 52.538477769170455645], [13.366073649389077715, 52.538521187428884218], [13.365993769851852946, 52.538611544345073412], [13.36592746899776607, 52.538699344780795286], [13.365846415994097285, 52.538790330339722345], [13.3659232780461803, 52.538872892085962008], [13.366026123998095088, 52.538938354749731729], [13.366158222792078547, 52.538987305064253519], [13.366289986309936921, 52.539033698898307989], [13.366450499755671899, 52.539023095790795992], [13.366605648783377092, 52.539042793263249109], [13.366734478635123651, 52.539099454928688715], [13.36682600901775686, 52.539173550952725122], [13.36692516693227617, 52.53924073190664501], [13.367074867722919862, 52.539250664461903284], [13.367161368963650148, 52.539329831537358473], [13.367291791376999299, 52.53938519400780649], [13.367439396691850106, 52.539406274494282911], [13.367544589576652925, 52.539469599772743891], [13.367637880158952157, 52.539546419915311048], [13.367772996438077371, 52.539596878972403715], [13.367846673366955201, 52.539686523426823328], [13.367895120767286699, 52.539777341347686956], [13.367949016404679696, 52.539876373533658693], [13.367850529042414109, 52.540133991327635954], [13.368834763155808432, 52.5404518852375233], [13.369704192880996985, 52.53969811615661456], [13.369490951312117843, 52.539736018565051268], [13.368948715303002217, 52.54035557141205004], [13.369454154757194786, 52.539694989149026583], [13.369177461426586362, 52.540624813181267427], [13.369170353281411678, 52.539797961616919508], [13.369402360336108515, 52.540575889193277703], [13.369500618921726698, 52.539904557046277489], [13.368629815134241312, 52.540594554697158003], [13.369802616291917019, 52.539719627614594799], [13.368469951686792641, 52.540059727665536116], [13.368204999727540283, 52.539770384368054579], [13.368197288376622467, 52.53986660861646385], [13.368052281451753061, 52.539844354663543413], [13.368022190419367234, 52.539934418213121603], [13.368028979760936181, 52.540032947484903048], [13.368155043584636132, 52.540240273859851072], [13.367998050538233201, 52.540239980493240068], [13.367874585104516427, 52.54018227108990402], [13.367731422198346536, 52.540145181168369959], [13.367664869887164514, 52.540026493419460962], [13.367641819653442781, 52.53992628776704521], [13.367600664508870523, 52.539839241702608774], [13.367483234045437257, 52.539770342458538721], [13.367385081959298532, 52.539694025230161856], [13.367276787770322244, 52.539631999146692465], [13.367241583777001779, 52.539531122942022989], [13.367148377013734262, 52.539445501801125715], [13.367022564647129457, 52.539387163755051802], [13.366880323750308435, 52.539330585908643911], [13.366747973499229829, 52.539281509865574549], [13.366606906068852823, 52.539236834321670244], [13.366458965477875154, 52.539178999189786623], [13.366317562771371286, 52.539129336413495253], [13.36618236267321258, 52.539082397755734632], [13.36601497606687694, 52.539096311714999388], [13.365891510633160166, 52.539040907335035513], [13.365791179252196841, 52.538959854331366728], [13.365757148725320391, 52.538863252897314737], [13.365803081554700427, 52.538763759706668566], [13.365858569753696017, 52.538678851027540873], [13.365940628585745387, 52.538586901549749086], [13.366046492022801928, 52.538522318985812376], [13.366205580544997744, 52.538516200196497152], [13.366335919139316957, 52.538449186880640696], [13.36643247866385309, 52.538381083917371939], [13.366297613841823022, 52.538334983449928473], [13.366203987983395152, 52.538261264611534784]]
          },
          "properties": { "userId": "QWqh9kiyz9c32Avwb" }
        }
      }
      , {
        "_id": "ti8REfaf7kaYwPdMH",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396003082462021538, 51.476009767550486629] },
            "properties": { "timestamp": "2015-06-16T14:43:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396003082462021538, 51.476009767550486629] },
            "properties": { "timestamp": "2015-06-16T14:43:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394469194181629845, 51.476030638489383762] },
            "properties": { "timestamp": "2015-06-16T14:43:33+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2392745874889561364, 51.476047360386210983] },
            "properties": { "timestamp": "2015-06-16T14:43:43+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390942089327037223, 51.4760648785638395] },
            "properties": { "timestamp": "2015-06-16T14:43:43+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2392745874889561364, 51.476047360386210983] },
            "properties": { "timestamp": "2015-06-16T14:43:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390942089327037223, 51.4760648785638395] },
            "properties": { "timestamp": "2015-06-16T14:43:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2389264032312095054, 51.476082271012920444] },
            "properties": { "timestamp": "2015-06-16T14:43:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2387896943904816993, 51.476119989577192371] },
            "properties": { "timestamp": "2015-06-16T14:43:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2386362217434108146, 51.476134657907742564] },
            "properties": { "timestamp": "2015-06-16T14:44:02+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2384856827624499687, 51.476140818606573646] },
            "properties": { "timestamp": "2015-06-16T14:44:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2383301984586179145, 51.476126359823602741] },
            "properties": { "timestamp": "2015-06-16T14:44:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2381730377741506643, 51.476147817495721881] },
            "properties": { "timestamp": "2015-06-16T14:44:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2380061540820053168, 51.47612527017619044] },
            "properties": { "timestamp": "2015-06-16T14:44:29+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2378473170169046469, 51.476134490269679134] },
            "properties": { "timestamp": "2015-06-16T14:44:38+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2378510050543001242, 51.476243874106067722] },
            "properties": { "timestamp": "2015-06-16T14:44:44+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2377391904659917898, 51.476306235465663974] },
            "properties": { "timestamp": "2015-06-16T14:44:49+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2375969495691707678, 51.476324214647966926] },
            "properties": { "timestamp": "2015-06-16T14:45:08+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2376547008820226736, 51.476407405036944454] },
            "properties": { "timestamp": "2015-06-16T14:45:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2378103528239181585, 51.476376852999884193] },
            "properties": { "timestamp": "2015-06-16T14:45:23+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2387133733884354569, 51.476172866871515055] },
            "properties": { "timestamp": "2015-06-16T14:45:56+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388943843610942253, 51.476157498593885009] },
            "properties": { "timestamp": "2015-06-16T14:45:57+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388697415657698997, 51.476066303487378661] },
            "properties": { "timestamp": "2015-06-16T14:45:59+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390222083844601997, 51.476095556329447334] },
            "properties": { "timestamp": "2015-06-16T14:46:07+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239167885861582441, 51.476142704534787242] },
            "properties": { "timestamp": "2015-06-16T14:46:13+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393130604245135018, 51.476114499430615012] },
            "properties": { "timestamp": "2015-06-16T14:46:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239462593577093763, 51.476080762270349567] },
            "properties": { "timestamp": "2015-06-16T14:46:24+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239522943279928846, 51.475995476405579154] },
            "properties": { "timestamp": "2015-06-16T14:46:40+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2396675311096378991, 51.475959727588552539] },
            "properties": { "timestamp": "2015-06-16T14:47:00+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2398223448612162301, 51.475931564393896167] },
            "properties": { "timestamp": "2015-06-16T14:47:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2397962771423527428, 51.475841249387222831] },
            "properties": { "timestamp": "2015-06-16T14:47:19+02:00" }
          }]
        },
        "userId": "eWB38jFoBPuXsksot",
        "begin": "2015-06-16T14:43:23+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2396003082462021538, 51.476009767550486629], [7.2396003082462021538, 51.476009767550486629], [7.2394469194181629845, 51.476030638489383762], [7.2392745874889561364, 51.476047360386210983], [7.2390942089327037223, 51.4760648785638395], [7.2392745874889561364, 51.476047360386210983], [7.2390942089327037223, 51.4760648785638395], [7.2389264032312095054, 51.476082271012920444], [7.2387896943904816993, 51.476119989577192371], [7.2386362217434108146, 51.476134657907742564], [7.2384856827624499687, 51.476140818606573646], [7.2383301984586179145, 51.476126359823602741], [7.2381730377741506643, 51.476147817495721881], [7.2380061540820053168, 51.47612527017619044], [7.2378473170169046469, 51.476134490269679134], [7.2378510050543001242, 51.476243874106067722], [7.2377391904659917898, 51.476306235465663974], [7.2375969495691707678, 51.476324214647966926], [7.2376547008820226736, 51.476407405036944454], [7.2378103528239181585, 51.476376852999884193], [7.2387133733884354569, 51.476172866871515055], [7.2388943843610942253, 51.476157498593885009], [7.2388697415657698997, 51.476066303487378661], [7.2390222083844601997, 51.476095556329447334], [7.239167885861582441, 51.476142704534787242], [7.2393130604245135018, 51.476114499430615012], [7.239462593577093763, 51.476080762270349567], [7.239522943279928846, 51.475995476405579154], [7.2396675311096378991, 51.475959727588552539], [7.2398223448612162301, 51.475931564393896167], [7.2397962771423527428, 51.475841249387222831]]
          },
          "properties": { "userId": "eWB38jFoBPuXsksot" }
        }
      }
      , {
        "_id": "eJTQCqSkSA6oExK7X",
        "waypoints": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395614999999997607, 51.475875600000001953] },
            "properties": { "timestamp": "2015-06-16T14:43:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395614999999997607, 51.475875600000001953] },
            "properties": { "timestamp": "2015-06-16T14:43:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2393963000000001173, 51.475954299999997943] },
            "properties": { "timestamp": "2015-06-16T14:43:31+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.239231400000000427, 51.47598740000000106] },
            "properties": { "timestamp": "2015-06-16T14:43:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390717999999996124, 51.476040199999999913] },
            "properties": { "timestamp": "2015-06-16T14:43:53+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2388780999999999821, 51.476058899999998175] },
            "properties": { "timestamp": "2015-06-16T14:43:54+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2385782000000000735, 51.476115599999999972] },
            "properties": { "timestamp": "2015-06-16T14:44:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2382406000000001356, 51.476219399999997961] },
            "properties": { "timestamp": "2015-06-16T14:44:18+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2380276999999999532, 51.476221700000003523] },
            "properties": { "timestamp": "2015-06-16T14:44:27+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2378401999999999461, 51.476165000000001726] },
            "properties": { "timestamp": "2015-06-16T14:44:37+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2376442000000000832, 51.476243199999998978] },
            "properties": { "timestamp": "2015-06-16T14:44:52+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2375410000000002242, 51.476306700000002081] },
            "properties": { "timestamp": "2015-06-16T14:45:10+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.237019599999999997, 51.476388900000003446] },
            "properties": { "timestamp": "2015-06-16T14:45:16+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2376066999999997265, 51.4763087999999982] },
            "properties": { "timestamp": "2015-06-16T14:45:19+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2378496999999999417, 51.476348100000002717] },
            "properties": { "timestamp": "2015-06-16T14:45:28+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2380598000000002656, 51.476327599999997631] },
            "properties": { "timestamp": "2015-06-16T14:45:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2382604999999999862, 51.476309399999998107] },
            "properties": { "timestamp": "2015-06-16T14:45:43+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2385032999999996406, 51.47623999999999711] },
            "properties": { "timestamp": "2015-06-16T14:45:51+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.238862600000000036, 51.476183699999999988] },
            "properties": { "timestamp": "2015-06-16T14:46:04+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2390707000000000804, 51.476113800000000253] },
            "properties": { "timestamp": "2015-06-16T14:46:15+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2392832000000000292, 51.476106000000001472] },
            "properties": { "timestamp": "2015-06-16T14:46:22+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2394613000000003211, 51.476093699999999842] },
            "properties": { "timestamp": "2015-06-16T14:46:35+02:00" }
          }, {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [7.2395566000000002305, 51.475990400000000591] },
            "properties": { "timestamp": "2015-06-16T14:46:50+02:00" }
          }]
        },
        "userId": "xWCMyjoL5arJDsyG9",
        "begin": "2015-06-16T14:43:22+02:00",
        "trail": {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [[7.2395614999999997607, 51.475875600000001953], [7.2395614999999997607, 51.475875600000001953], [7.2393963000000001173, 51.475954299999997943], [7.239231400000000427, 51.47598740000000106], [7.2390717999999996124, 51.476040199999999913], [7.2388780999999999821, 51.476058899999998175], [7.2385782000000000735, 51.476115599999999972], [7.2382406000000001356, 51.476219399999997961], [7.2380276999999999532, 51.476221700000003523], [7.2378401999999999461, 51.476165000000001726], [7.2376442000000000832, 51.476243199999998978], [7.2375410000000002242, 51.476306700000002081], [7.237019599999999997, 51.476388900000003446], [7.2376066999999997265, 51.4763087999999982], [7.2378496999999999417, 51.476348100000002717], [7.2380598000000002656, 51.476327599999997631], [7.2382604999999999862, 51.476309399999998107], [7.2385032999999996406, 51.47623999999999711], [7.238862600000000036, 51.476183699999999988], [7.2390707000000000804, 51.476113800000000253], [7.2392832000000000292, 51.476106000000001472], [7.2394613000000003211, 51.476093699999999842], [7.2395566000000002305, 51.475990400000000591]]
          },
          "properties": { "userId": "xWCMyjoL5arJDsyG9" }
        },
        "end": "2015-06-16T14:46:58+02:00",
        "stats": { "distance": 381, "duration": 216, "area": 3.2799999999999998046 }
      }

    ];

    _.forEach( walkFixtures, function (walk) {
      //Updates the walks and inserts it if it does not exist
     // WalksCollection.insert( walk );
    } );

    console.log( '######### inserted walk fixtures' );
  }

} );
