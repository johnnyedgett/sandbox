var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ServerSchema = new Schema({
  serverName: String,
  serverLocale: String
})

var Server = mongoose.model('Server', ServerSchema)
module.exports = Server
