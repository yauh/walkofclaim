Meteor.publish( 'walks', function (geojson) {
  check( geojson, {
    type: 'Feature',
    geometry: Object,
    properties: Object
  } );

  if (geojson && geojson.geometry) {
    // TODO: reduce precision
    return WalksCollection.find( {
      archived: { $not: { $eq: true } },
      'trail.geometry': {
        '$geoIntersects': { '$geometry': geojson.geometry }
      }
    }, {fields: {trail: 1}} );
  }
} );

Meteor.publish( 'walkById', function (id) {
  check( id, String );
  return WalksCollection.find( { _id: id, archived: { $not: { $eq: true } } } );
} );