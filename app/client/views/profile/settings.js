Template.settings.helpers( {
  settings: function () {
    if (Meteor.user()) {
      return Meteor.user().profile.settings;
    }
  },
  isSelected: function (input) {
    return input === Meteor.user().profile.settings.mapTheme ? 'selected' : '';
  }
} );

// TODO: Android not showing input for editing name properly

Template.settings.events( {
    'keyup #settings-name, change': function (evt, tpl) {
      console.log( 'firing keyup/change event' );
      var settings = {};
      settings.name = tpl.$( 'input[id=settings-name]' ).val().substring(0,24); // only 24 chars for a name
      settings.useImperial = tpl.$( '#settings-imperial-units' ).is( ':checked' );
      settings.mapTheme = tpl.$( 'select[id=settings-map-theme]' ).val();
      settings.showImage = tpl.$( '#settings-show-image' ).is( ':checked' );
      storeSettings( settings );
    }
  }
);

var storeSettings = _.throttle( function (settings) {
    console.log( 'store settings', settings );
    Meteor.call( 'updateSettings', settings );
  },
  500,
  { leading: false }
);