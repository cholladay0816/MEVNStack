const User = require('../models/user')

exports.index = function (req, res) {
  const u = new User('Test', 'test@test.com')
  res.send(u)
}
