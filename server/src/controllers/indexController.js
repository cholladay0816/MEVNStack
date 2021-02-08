var User = require('../models/user');

exports.index = function(req, res) {
    let u = new User('Test', 'test@test.com');
    res.send(u);
}

