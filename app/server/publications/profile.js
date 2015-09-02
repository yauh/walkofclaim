Meteor.publish( 'profile', function () {
  return Meteor.users.find({_id: this.userId}, {profile: 1});
} );