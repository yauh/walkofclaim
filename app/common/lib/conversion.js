formatLength = function (kilometers) {
  var output;
  if (Meteor.user() && Meteor.user().profile.settings.useImperial) {
    var miles = kilometers * 0.6214;
    output = miles.toFixed( 2 );
  }
  else {
    output = kilometers.toFixed( 2 );
  }
  return output
};