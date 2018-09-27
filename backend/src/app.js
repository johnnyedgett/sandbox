'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')

// Routes
var userRouter = require('./controllers/UserRouter')

app.use(morgan('combined'))
app.use('/users', userRouter)

app.get('/', (req, res) => {
  console.log('here')
  res.send({ 'msg': 'hello!' })
})

app.listen(8080)
