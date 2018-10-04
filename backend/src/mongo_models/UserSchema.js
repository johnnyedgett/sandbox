var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  id: Number,
  username: String,
  gold: [
    {
      serverName: String,
      locale: String,
      amount: Number
    }
  ]
})

var user = mongoose.model('user', UserSchema)
module.exports = user
