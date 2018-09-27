'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')

// const db = require('./utils/DBConnector')

app.use(morgan('combined'))

app.get('/', (req, res) => {
  console.log('here')
  res.send({ 'msg': 'hello!' })
})

app.listen(8080)
