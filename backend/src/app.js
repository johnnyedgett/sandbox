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
    potatos(number: Int!): [Potato]
  },
  type Potato {
    id: Int
    name: String
  }
`)

var goldSchema = buildSchema(`
  type Query {
    gold(id: Int!): Int
  },
  type Gold{
    id: Int
    total: Int
  }
`)

var gold = [
  {
    id: 1,
    total: 1000
  },
  {
    id: 2,
    total: 2000
  }
]

// If this was an array of objects retrieved from the mongo database..
var potatos = [
  {
    id: 1,
    name: 'red'
  },
  {
    id: 2,
    name: 'green'
  },
  {
    id: 3,
    name: 'blue'
  }
]

var getPotatos = (number) => {
  if (number === 0 || number > 10) {
    return 'I can\'t return that many potatos'
  } else {
    return potatos
  }
}

var getGold = ({ id }) => {
  if (id === 0) {
    return -1
  } else {
    for (var i = 0; i < gold.length; i++) {
      console.log(`Checking for id: ${id}`)
      if (gold[i].id === id) {
        console.log('Found a match: ' + gold[i])
        return gold[i].total
      }
    }
    return -1
  }
}

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
  },
  potatos: getPotatos
}

var goldRoot = {
  gold: getGold
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
app.use('/test', graphqlHTTP({
  schema: goldSchema,
  rootValue: goldRoot,
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
