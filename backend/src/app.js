'use strict'

const express = require('express')
const app = express()
const morgan = require('morgan')
var getConnection = require('./utils/DBConnector')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')

var schema = buildSchema(`
  type Query {
    hello: String,
    doSomething(input: String): String
  }
`)

var root = {
  hello: () => 'Hello world!',
  doSomething: ({ input }) => {
    console.log('I am in the method call for goodbye')
    if (input.length >= 20) {
      console.log('Input length was too long')
      return 'ERR: String was too long'
    } else {
      return input.toLowerCase()
    }
  }
}

// Load environment variables from .env file
require('dotenv').load()

// Routes
var userRouter = require('./controllers/UserRouter')

app.use(morgan('combined'))
app.use('/users', userRouter)
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

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
