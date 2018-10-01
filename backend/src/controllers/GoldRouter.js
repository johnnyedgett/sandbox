const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
// var getConnection = require('./utils/DBConnector')

router.get('/', (req, res) => {
  res.send({ 'msg': 'wow great job, u got the gold route. proud of u.' })
})

router.get('/:id/:server/:gold', (req, res) => {
  res.send({
    'id': req.params.id,
    'server': req.params.server,
    'gold': req.params.gold
  })
})

module.exports = router
