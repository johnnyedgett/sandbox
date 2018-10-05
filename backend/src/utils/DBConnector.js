// This will take care of maintaining the connection with the database.
require('dotenv').load()
const dbserver = process.env.DB_SERVER
const dbdatabase = process.env.DB_DATABASE
const dbport = process.env.DB_PORT
const dbuser = process.env.DB_USERNAME
const dbpass = process.env.DB_PASSWORD
const mongoose = require('mongoose')
const Admin = mongoose.mongo.Admin

mongoose.connect('mongodb://' + dbuser + ':' + dbpass + '@' + dbserver + ':' + dbport + '/' + dbdatabase)

var db = mongoose.connection

db.once('open', () => {
  console.log('the database connection has been created')
  new Admin(db.db).listDatabases((err, res) => {
    if (err) console.log(err)
    console.log(res)
    console.log('mongodb://' + dbserver + ':' + dbport + '/' + dbdatabase)
  })
})

module.exports = db
