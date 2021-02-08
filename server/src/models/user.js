const mongoose = require('mongoose')
const Schema = mongoose.Schema

class User {
  static get schema () {
    return new Schema({
      name: String,
      email: String,
      password: String,
      email_verified_at: Date,
      created_at: Date,
      updated_at: Date
    })
  }

  constructor (name, email) {
    this.name = name
    this.email = email
    this.created_at = new Date()
  }
}

module.exports = User
