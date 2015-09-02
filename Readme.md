# Walk of Claim

## What is it?

Walk of Claim is a small game for mobile devices. Think [Qix](http://en.wikipedia.org/wiki/Qix) and [Ingress](https://www.ingress.com) had a love child.

## How to play

You can walk around anywhere and start claiming land.
You click "Claim" and start walking. When you reach your starting point just click "Claimed" and it belongs to you. But look out, if someone else is on a walk of claim and crosses your line, you will lose your currect claim!

## Highscores:

* Square Meters claimed
* Number of claims
* Average claim size

## Technology

* Meteor
* Cordova (see http://grigio.org/meteor_and_phonegap_cordova_3_x_build_native_app_android_and_ios )
* [OpenStreetMap](http://www.openstreetmap.org)
* [Leaflet](http://leafletjs.com) (?)


## Suggested reading

http://www.macwright.org/2015/03/23/geojson-second-bite.html

### Temporary stuff

REMEMBER TO ADD appcache-extra again

Bochum:walkofclaim stephan$ cordova create woc-cordova de.yauh.walkofclaim "WalkofClaim"
Creating a new cordova project with name "WalkofClaim" and id "de.yauh.walkofclaim" at location "/Users/stephan/Documents/Code/bitbucket/walkofclaim/woc-cordova"
Bochum:walkofclaim stephan$ cd woc-cordova/
Bochum:woc-cordova stephan$ cordova plugin add org.apache.cordova.device
Fetching plugin "org.apache.cordova.device" via plugin registry
Bochum:woc-cordova stephan$ cordova plugin add org.apache.cordova.vibration
Fetching plugin "org.apache.cordova.vibration" via plugin registry
Bochum:woc-cordova stephan$ cordova plugin add org.apache.cordova.geolocation
Fetching plugin "org.apache.cordova.geolocation" via plugin registry
Bochum:woc-cordova stephan$ cordova plugin add https://github.com/driftyco/ionic-plugins-keyboard.git
Fetching plugin "https://github.com/driftyco/ionic-plugins-keyboard.git" via git clone
Bochum:woc-cordova stephan$ cordova plugin add org.apache.cordova.dialogs
Fetching plugin "org.apache.cordova.dialogs" via plugin registry
Bochum:woc-cordova stephcordova plugin add org.apache.cordova.statusbar
Fetching plugin "org.apache.cordova.statusbar" via plugin registry
Bochum:woc-cordova stephan$ cordova plugin add org.apache.cordova.splashscreen
Fetching plugin "org.apache.cordova.splashscreen" via plugin registry
Bochum:woc-cordova stephan$ cordova platform add ios
Creating ios project...
Installing "com.ionic.keyboard" for ios
Installing "org.apache.cordova.device" for ios
Installing "org.apache.cordova.dialogs" for ios
Installing "org.apache.cordova.geolocation" for ios
Installing "org.apache.cordova.splashscreen" for ios
Installing "org.apache.cordova.statusbar" for ios
Installing "org.apache.cordova.vibration" for ios
Bochum:woc-cordova stephan$ cordova run ios --device