/*
 var Geolocation.currentLocation returns an object:
 { timestamp: 1428080813703, // in ms
 coords: {
 accuracy: 65,
 altitude: 116.82,
 altitudeAccuracy: null,
 heading: 285.46,
 latitude: 51.481339399999996,
 longitude: 7.2168733,
 speed: 1.43}
 }
 */

/**
 *
 * @param {object} obj
 * @returns {object} geojson point
 */
latlngObjToPoint = function (obj) {
  return turf.point( [ obj.lng, obj.lat ] );
};

/**
 *
 * @param {object} position
 * @returns {object} geojson point
 */
positionToPoint = function (position) {
  return turf.point( [ position.coords.longitude, position.coords.latitude ] )
};

/**
 *
 * @param {array} bboxArray
 * @returns {object} geojson polygon
 */
bboxArrayToPolygon = function (bboxArray) {
  return turf.bboxPolygon( bboxArray )
};

/**
 *
 * @param {object} point1
 * @param {object} point2
 * @returns {number} distance
 */
getDistanceBetweenPoints = function (point1, point2) {
  // returns distance in meters
  return turf.distance( point1, point2, 'kilometers' ) * 1000;
};

/**
 *
 * @param {object} lineString
 * @returns {number} distance
 */
getLineDistance = function (lineString) {
  // returns lineDistance in kilometers
  var distance = turf.lineDistance( lineString, 'kilometers' );
  return distance;

};

/**
 *
 * @param {object} walk
 * @returns {{distance: number, duration: number}}
 */
getWalkStats = function (walk) {
  var durationInS = moment( walk.end ).diff( walk.begin, 'seconds' );
  var distanceInKm = getLineDistance( walk.trail );
  var areaInKm = getAreaInSqKm( walk.claim );
  var speedInKph = 3.6 * ((distanceInKm * 1000) / durationInS);
  return { distance: distanceInKm, duration: durationInS, area: areaInKm, speed: speedInKph };
};

getAreaInSqKm = function (poly) {
  var area = turf.area( poly );
  var areaInSqKm = (area / 1000) / 100; // in square kilometers
  return parseFloat( areaInSqKm );
};

getWalkDistance = function (walk) {
  var distanceInKm = getLineDistance( walk.trail );
  return distanceInKm;
};

getWalkArea = function (walk) {
  poly = turf.convex( walk.waypoints, 1, 'kilometers' );
  var area = turf.area( poly );
  var areaInSqKm = (area / 1000) / 100; // in square kilometers
  return parseFloat( areaInSqKm );
};

isDistanceGreater = function (point1, point2, distance) {
  var actual = getDistanceBetweenPoints( point1, point2 );
  //console.log( 'actual distance', actual );
  if (actual > distance) {
    return true;
  }
  else {
    return false;
  }
};

isDistanceSmaller = function (point1, point2, distance) {
  var actual = getDistanceBetweenPoints( point1, point2 );
  //console.log( 'actual distance', actual );
  if (actual < distance) {
    return true;
  }
  else {
    return false;
  }
};

if (Meteor.isServer) {
  isValidGeojson = function (geojson) {
    return GeoJsonStats.validate( geojson );
  };
}