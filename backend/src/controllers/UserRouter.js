const express = require('express')
const router = express.Router()
// var User = require('../models/UserSchema')

router.get('/', (req, res) => {
  res.send({ 'msg': 'wow great job, u got the user route. proud of u.' })
})

module.exports = router
