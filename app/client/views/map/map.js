// MapBounds is a reactive datasource for current map view bounds/size
// used for limiting subscriptions to the visible area
MapBounds = { bounds: [] };
MapBounds = {
  get: function () {
    if (!this.dep) {
      this.dep = new Tracker.Dependency();
    }
    this.dep.depend();
    if (this.bounds)
      return this.bounds;
  },
  set: function (bounds) {
    this.bounds = bounds;
    this.dep.changed();
  }
};

Tracker.autorun( function () {
  // subs-manager does not work with template-lvl subs
  // hence this crude fix
  var mapBoundsPoly; // the visible map area as a polygon
  if (Session.equals( 'mapVisible', true )) {
    if (!MapBounds.get()) {
      mapBoundsPoly = bboxArrayToPolygon( [ map.getBounds().getSouthWest().lng, map.getBounds().getSouthWest().lat, map.getBounds().getNorthEast().lng, map.getBounds().getNorthEast().lat ] );
    }
    else {
      mapBoundsPoly = bboxArrayToPolygon( MapBounds.get() );
    }
    if (mapBoundsPoly) {
      subs.subscribe( 'claims', mapBoundsPoly );
      subs.subscribe( 'walks', mapBoundsPoly );
    }
  }
} );

Template.map.onRendered( function () {
  var currentMapCenter; // coords of the current map center
  var currentMapWidth; // width of the map area in meters
  L.Icon.Default.imagePath = 'images';

  // initialize the map
  initializeMap();
  myMarkers = new L.FeatureGroup();

  // leaflet map events
  map.on( 'dragend viewreset zoomend resize', function (e) {
    updateMapBounds();
    currentMapWidth = getMapWidth();
    Session.set( 'zoomLevel', map.getZoom() );
  } );


  // autorun
  // NOTE TO SELF: Can this be done more elegantly???
  this.autorun( function () {
    currentMapCenter = map.getCenter();
    currentMapWidth = getMapWidth();

    // update marker on map to current position
    updateMarker( Session.get( 'currentLatlng' ) );

    // if user walks off-center - re-center the map
    if (isDistanceGreater( latlngObjToPoint( Session.get( 'previousCenter' ) ), latlngObjToPoint( Session.get( 'currentLatlng' ) ), currentMapWidth / 6 )) {
      centerMap( Session.get( 'currentLatlng' ) );
      Session.set( 'previousCenter', Session.get( 'currentLatlng' ) );
    }

    if (Session.get( 'walkId' )) {
      showStartingPointOnMap( Session.get( 'startLatlng' ) );
    }
    else {
      removeStartingPointFromMap();
    }

    // draw a line for each ongoing walk
    WalksCollection.find().forEach( drawWalkOnMap );

    // draw a polygon for each claim nearby
    ClaimsCollection.find().forEach( drawClaimOnMap );

  } );

} );

// again, needed for subs-manager instead of tmpl-lvl subs
Template.map.onDestroyed( function () {
  Session.set( 'mapVisible', false );
} );

initializeMap = function () {
  // address performance issues on Android
  L_PREFER_CANVAS = true;
  var tileLayers = {
    Toner: function () {
      tiles = new L.tileLayer( 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
      } );
      map.addLayer( tiles );
    },
    Watercolor: function () {
      tiles = new L.tileLayer( 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 1,
        maxZoom: 16,
        ext: 'png'
      } );
      map.addLayer( tiles );
    },
    None: function () {
      console.log( 'not adding a tile set' );
    }
  };

  var positionIcon = {
    default: function () {
      return L.icon( {
        iconUrl: '/icons/walker.png',
        iconSize: [ 32, 70 ], // size of the icon
        iconAnchor: [ 25, 68 ], // point of the icon which will correspond to marker's location
        popupAnchor: [ 37, 9 ] // point from which the popup should open relative to the iconAnchor
      } );
    }
  };

  // set up the map
  map = new L.Map( 'map', {
    zoomControl: false
  } );
  map.attributionControl.setPrefix( 'Walk of Claim' );

  // get user preferences
  if (Meteor.user() && Meteor.user().profile.settings.mapTheme) {
    var myMapTheme = Meteor.user().profile.settings.mapTheme;
  }
  else {
    var myMapTheme = 'Watercolor'; // default map theme is Watercolor
  }

  if (Meteor.user() && Meteor.user().profile.settings.mapIcon) {
    var myPositionIcon = Meteor.user().profile.settings.mapIcon;
  }
  else {
    var myPositionIcon = 'default'; // default icon is default
  }

  var tiles = tileLayers[ myMapTheme ]();
  var icon = positionIcon[ myPositionIcon ]();

  // start the map at our current position, maintain zoom between view changes
  map.setView( Session.get( 'currentLatlng' ), Session.get( 'zoomLevel' ) );


  L.Control.zoomHome = L.Control.extend( {
    options: {
      position: 'topright',
      zoomInText: '+',
      zoomInTitle: 'Zoom in',
      zoomOutText: '-',
      zoomOutTitle: 'Zoom out',
      zoomHomeText: '<i class="icon ion-home" style="line-height:1.65;"></i>',
      zoomHomeTitle: 'Zoom home'
    },

    onAdd: function (map) {
      var controlName = 'gin-control-zoom',
          container = L.DomUtil.create( 'div', controlName + ' leaflet-bar' ),
          options = this.options;

      this._zoomInButton = this._createButton( options.zoomInText, options.zoomInTitle,
        controlName + '-in', container, this._zoomIn );
      this._zoomHomeButton = this._createButton( options.zoomHomeText, options.zoomHomeTitle,
        controlName + '-home', container, this._zoomHome );
      this._zoomOutButton = this._createButton( options.zoomOutText, options.zoomOutTitle,
        controlName + '-out', container, this._zoomOut );

      this._updateDisabled();
      map.on( 'zoomend zoomlevelschange', this._updateDisabled, this );

      return container;
    },

    onRemove: function (map) {
      map.off( 'zoomend zoomlevelschange', this._updateDisabled, this );
    },

    _zoomIn: function (e) {
      this._map.zoomIn( e.shiftKey ? 3 : 1 );
    },

    _zoomOut: function (e) {
      this._map.zoomOut( e.shiftKey ? 3 : 1 );
    },

    _zoomHome: function (e) {
      map.setView( Session.get( 'currentLatlng' ), Session.get( 'zoomLevel' ) );
    },

    _createButton: function (html, title, className, container, fn) {
      var link = L.DomUtil.create( 'a', className, container );
      link.innerHTML = html;
      link.href = '#';
      link.title = title;

      L.DomEvent.on( link, 'mousedown dblclick', L.DomEvent.stopPropagation )
        .on( link, 'click', L.DomEvent.stop )
        .on( link, 'click', fn, this )
        .on( link, 'click', this._refocusOnMap, this );

      return link;
    },

    _updateDisabled: function () {
      var map = this._map,
          className = 'leaflet-disabled';

      L.DomUtil.removeClass( this._zoomInButton, className );
      L.DomUtil.removeClass( this._zoomOutButton, className );

      if (map._zoom === map.getMinZoom()) {
        L.DomUtil.addClass( this._zoomOutButton, className );
      }
      if (map._zoom === map.getMaxZoom()) {
        L.DomUtil.addClass( this._zoomInButton, className );
      }
    }
  } );

  // add the new control to the map
  var zoomHome = new L.Control.zoomHome();
  zoomHome.addTo( map );

  myLayer = new L.layerGroup();
  positionMarker = L.marker( Session.get( 'currentLatlng' ), { icon: icon } ).addTo( map );
  map.addLayer( myLayer );
  // needed for subs-manager instead of tmpl-lvl subs
  Session.set( 'mapVisible', true );
  return map;
};


updateMapBounds = function () {
  var bounds = [ map.getBounds().getSouthWest().lng, map.getBounds().getSouthWest().lat, map.getBounds().getNorthEast().lng, map.getBounds().getNorthEast().lat ];
  MapBounds.set( bounds );
};

getMapWidth = function () {
  var left = {}, right = {};
  left.coords = {};
  right.coords = {};
  left.coords.longitude = map.getBounds().getWest();
  right.coords.longitude = map.getBounds().getEast();

  left.coords.latitude = 51;
  right.coords.latitude = 51;

  var mapWidth = getDistanceBetweenPoints( positionToPoint( left ), positionToPoint( right ) );
  return mapWidth;
};


updateMarker = function (latlng) {
  positionMarker.setLatLng( latlng );
};

centerMap = function (latlng) {
  map.panTo( latlng );
};

drawWalkOnMap = function (walkDoc) {
  var owner;
  if (walkDoc.trail){
    owner = walkDoc.trail.properties.owner;
  }
  var myWalkStyle = {
    'color': '#00FF22',
    'fillColor': '#00FF22',
    'fillOpacity': 0.8,
    'weight': 4,
    'opacity': 0.7
  };
  var otherWalkStyle = {
    'color': '#FF0000',
    'fillColor': '#FF0000',
    'fillOpacity': 0.8,
    'weight': 5,
    'opacity': 0.7
  };
  L.geoJson( walkDoc.trail, {
    style: function (walk) {
      switch (walk.properties.userId) {
        case Meteor.userId():
          return myWalkStyle;
        default:
          return otherWalkStyle;
      }
    }
  } ).addTo( map ).bindPopup( owner + ' walking' );
};

drawClaimOnMap = function (claim) {
  var myClaimsStyle = {
    'color': '#000000',
    'fillColor': '#F6FF45',
    'fillOpacity': 0.8,
    'weight': 2,
    'opacity': 0.7
  };
  var othersClaimsStyle = {
    'color': '#000000',
    'fillColor': '#FF0000',
    'fillOpacity': 0.6,
    'weight': 2,
    'opacity': 0.7
  };
  L.geoJson( claim.geojson, {
    style: function (claim) {
      switch (claim.properties.userId) {
        case Meteor.userId():
          return myClaimsStyle;
        default:
          return othersClaimsStyle;
      }
    }
  } ).bindPopup( 'Claimed by ' + claim.geojson.properties.owner ).addTo( map );
};

showStartingPointOnMap = function (latlng) {
  startingPoint = L.marker( latlng ).bindPopup( 'My starting point.' );
  myLayer.addLayer( startingPoint );
};

removeStartingPointFromMap = function () {
  myLayer.clearLayers();
};

getAllMarkers = function () {
  var allMarkersObjArray = []; // for marker objects
  var allMarkersGeoJsonArray = []; // for readable geoJson markers
  $.each( map._layers, function (ml) {
   if (map._layers[ ml ].feature) {
      allMarkersObjArray.push( this );
      allMarkersGeoJsonArray.push( JSON.stringify( this.toGeoJSON() ) )
    }
  } );
};