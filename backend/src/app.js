'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')
const db = require('./utils/DBConnector')

// Routes
var userRouter = require('./controllers/UserRouter')

app.use(morgan('combined'))
app.use('/users', userRouter)

app.get('/', (req, res) => {
  console.log('here')
  res.send({ 'msg': 'hello!' })
})

app.get('/dbtest', db.postgres)

app.listen(8080)
