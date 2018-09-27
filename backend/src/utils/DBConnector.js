// Still trying to figure out the database connection..

// 'use strict'

// const mysql = require('mysql')
// const config = require('../resources/config')

// function createConnection () {
//   const db = mysql.createConnection(config)

//   db.connect((err) => {
//     if (err) throw err
//     console.log('Connected!')
//   })
// }

// createConnection()

'use strict'

let db = null
const ini = require('ini')
const fs = require('fs')
const config = ini.parse(fs.readFileSync('../properties/database.ini', 'utf-8'))
const dbserver = config.DB_SERVER
const dbenvironment = config.DB_ENVIRONMENT
const dbport = config.DB_PORT
const mongoose = require('mongoose')

module.exports.openConnection = function () {
  const mongoDB = 'mongodb://' + dbserver + ':' + dbport + '/' + dbenvironment // inject this on build basedo n environment?
  db = mongoose.connect(mongoDB)
}

module.exports.closeConnection = function () {
  db.close()
}

module.exports.getConnection = function () {
  return db
}
