App.info( {
  id: 'changeme',
  version: '0.3.1',
  name: 'Walk of Claim',
  description: 'A geolocation-based game, claiming the world one patch at a time.',
  author: 'changeme',
  email: 'changeme',
  website: 'changeme'
} );

// Set up icons
App.icons( {
  // iOS
  'iphone': 'mobile-resources/ios/icon/Icon-60.png',
  'iphone_2x': 'mobile-resources/ios/icon/Icon-60@2x.png',
  'iphone_3x': 'mobile-resources/ios/icon/Icon-60@3x.png',
  'ipad': 'mobile-resources/ios/icon/Icon-76.png',
  'ipad_2x': 'mobile-resources/ios/icon/Icon-76@2x.png',

  // Android
  'android_ldpi': 'mobile-resources/android/icon/drawable-ldpi-icon.png',
  'android_mdpi': 'mobile-resources/android/icon/drawable-mdpi-icon.png',
  'android_hdpi': 'mobile-resources/android/icon/drawable-hdpi-icon.png',
  'android_xhdpi': 'mobile-resources/android/icon/drawable-xhdpi-icon.png'
} );

// Set up launch screens
App.launchScreens( {
  // iOS
  'iphone': 'mobile-resources/ios/splash/Default~iphone.png',
  'iphone_2x': 'mobile-resources/ios/splash/Default@2x~iphone.png',
  'iphone5': 'mobile-resources/ios/splash/Default-568h@2x~iphone.png',
  'iphone6': 'mobile-resources/ios/splash/Default-667h.png',
  'iphone6p_portrait': 'mobile-resources/ios/splash/Default-736h.png',
  'iphone6p_landscape': 'mobile-resources/ios/splash/Default-Landscape-736h.png',
  'ipad_portrait': 'mobile-resources/ios/splash/Default-Portrait~ipad.png',
  'ipad_portrait_2x': 'mobile-resources/ios/splash/Default-Portrait@2x~ipad.png',
  'ipad_landscape': 'mobile-resources/ios/splash/Default-Landscape~ipad.png',
  'ipad_landscape_2x': 'mobile-resources/ios/splash/Default-Landscape@2x~ipad.png',

  // Android
  'android_ldpi_portrait': 'mobile-resources/android/splash/drawable-port-ldpi-screen.png',
  'android_ldpi_landscape': 'mobile-resources/android/splash/drawable-land-ldpi-screen.png',
  'android_mdpi_portrait': 'mobile-resources/android/splash/drawable-port-mdpi-screen.png',
  'android_mdpi_landscape': 'mobile-resources/android/splash/drawable-land-mdpi-screen.png',
  'android_hdpi_portrait': 'mobile-resources/android/splash/drawable-port-hdpi-screen.png',
  'android_hdpi_landscape': 'mobile-resources/android/splash/drawable-land-hdpi-screen.png',
  'android_xhdpi_portrait': 'mobile-resources/android/splash/drawable-port-xhdpi-screen.png',
  'android_xhdpi_landscape': 'mobile-resources/android/splash/drawable-land-xhdpi-screen.png'
} );

// Set PhoneGap/Cordova preferences
App.setPreference( 'deployment-target', '7.0' );
App.setPreference( 'BackgroundColor', '0xff0000ff' );
//App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference( 'Orientation', 'portrait' );
App.setPreference( 'StatusBarOverlaysWebView', 'true' );
App.setPreference( 'StatusBarStyle', 'lightcontent' );

App.configurePlugin( 'cc.fovea.cordova.purchase', { BILLING_KEY: 'changeme' } );

App.accessRule( 'http://192.168.2.114:3000/*' );
App.accessRule( 'http://localhost:3000/*' );
App.accessRule( 'http://meteor.local/*' );
App.accessRule( 'http://enginex.kadira.io/*' );
App.accessRule( 'https://enginex.kadira.io/*' );
App.accessRule( 'https://*.a.ssl.fastly.net/*' );
App.accessRule( 'https://*.akamaihd.net/*' );
App.accessRule( 'https://*.b.ssl.fastly.net/*' );
App.accessRule( 'https://*.c.ssl.fastly.net/*' );
App.accessRule( 'https://*.d.ssl.fastly.net/*' );
App.accessRule( 'https://*.facebook.com/*' );
App.accessRule( 'https://fbcdn-profile-a.akamaihd.net/*' );
App.accessRule( 'https://graph.facebook.com/*' );
App.accessRule( 'https://pbs.twimg.com/*' );
