const mongoose = require('mongoose');
const User = mongoose.model('user');

describe('CREATE', () => {
  test('can create a user named <username>', async () => {
    const newUser = await User.create({ username: 'Art' });
    expect(newUser.username).toEqual('Art');
  });
  test('can create a user... promise version', () => {
    User.create({ username: 'Ted' }).then(newUser => {
      expect(newUser.username).toEqual('Ted');
    });
  });
});
