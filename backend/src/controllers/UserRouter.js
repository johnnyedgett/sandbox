const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
var getConnection = require('./utils/DBConnector')

// var User = require('../models/UserSchema')

router.get('/', (req, res) => {
  res.send({ 'msg': 'wow great job, u got the user route. proud of u.' })
})

router.get('/:id', (req, res) => {
  res.send('You asked for: ' + req.params.id)
})

// Just testing out posting data to user
router.post('/createUser', (req, res) => {
  var user = req.body.username
  getConnection((err, con) => {
    if (err) res.send(err)
    else {
      var query = `INSERT INTO Users (username) VALUES('${user}')`
      con.query(query, (err, results) => {
        if (err) throw err
        con.release()
        res.send(results)
      })
    }
  })
})
module.exports = router
