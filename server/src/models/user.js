const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = new Schema({
  name: String,
  email: String,
  password: String,
  email_verified_at: Date,
  created_at: Date,
  updated_at: Date
})
