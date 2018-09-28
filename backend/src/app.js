'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')
var getConnection = require('./utils/DBConnector')

// Load environment variables from .env file
require('dotenv').load()

// Routes
var userRouter = require('./controllers/UserRouter')

app.use(morgan('combined'))
app.use('/users', userRouter)

app.get('/', (req, res) => {
  console.log('here')
  console.log(process.env.NODE_ENV)
  res.send({ 'msg': 'hello!' })
})

app.get('/dbtest/:id', (req, res) => {
  getConnection((err, con) => {
    if (err) throw err
    var query = `SELECT * FROM Gold WHERE user_id=${req.params.id}`
    con.query(query, (err, results) => {
      if (err) throw err
      con.release()
      res.send(results)
    })
  })
})

app.listen(8080)
