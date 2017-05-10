Meteor.methods({
  'createOctoUser': function(data) {
    return Accounts.createUser({
      profile: data.profile,
      email: data.email,
      password: data.password,
    });
  }
});
