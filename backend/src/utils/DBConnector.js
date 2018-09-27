// Still trying to figure out the database connection..

'use script'

const mysql = require('mysql')
const config = require('../resources/config')

function createConnection () {
  const db = mysql.createConnection(config)

  db.connect((err) => {
    if (err) throw err
    console.log('Connected!')
  })
}

createConnection()
