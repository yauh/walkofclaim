Meteor.publish( 'claims', function (geojson) {
  check( geojson, {
    type: 'Feature',
    geometry: Object,
    properties: Object
  } );

  if (geojson && geojson.geometry) {
    // TODO: Simplify returned claim polygons
    return ClaimsCollection.find( {
      'geojson.geometry': {
        '$geoIntersects': { '$geometry': geojson.geometry }
      }, destroyed: { $not: { $eq: true } }
    } );
  }
} );