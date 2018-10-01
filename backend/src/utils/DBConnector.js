// Still trying to figure out the database connection..
// Using MySQL at the moment, although I would rather use Mongo.
// Going to probably change that to Mongo

const mysql = require('mysql')

let dbUser = process.env.dbUser
let dbPass = process.env.dbPass
let dbDatabase = process.env.dbDatabase
let dbSocketPath = process.env.dbSocketPath

var pool = mysql.createPool({
  connectionLimit: 10,
  socketPath: dbSocketPath,
  user: dbUser,
  password: dbPass,
  database: dbDatabase
})

var getConnection = (cb) => {
  pool.getConnection((err, connection) => {
    if (err) return cb(err)
    else cb(null, connection)
  })
}

module.exports = getConnection
