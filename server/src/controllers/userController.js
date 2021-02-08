const mongoose = require('mongoose')

const userSchema = require('../models/user')
const User = mongoose.model('User', userSchema)

// Get list on index
exports.index = async function (req, res) {
  const users = await User.find()
  res.send(users)
}

// Show one entry
exports.show = async function (req, res) {
  const u = await User.findOne({ _id: req.params.id })
  res.send(u)
}

// Store a new User
exports.store = function (req, res) {
  const u = new User({ name: req.query.name, email: req.query.email, created_at: new Date(), updated_at: new Date() })
  u.save()
  res.send(u)
}
