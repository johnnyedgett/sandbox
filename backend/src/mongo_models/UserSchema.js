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

var User = mongoose.model('User', UserSchema)
module.exports = User
