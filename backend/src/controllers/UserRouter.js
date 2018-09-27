const express = require('express')
const router = express.Router()
// var User = require('../models/UserSchema')

router.get('/', (req, res) => {
  res.send({ 'msg': 'wow great job, u got the user route. proud of u.' })
})

router.get('/:id', (req, res) => {
  res.send('You asked for: ' + req.params.id)
})

module.exports = router
