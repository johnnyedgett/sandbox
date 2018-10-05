// Imports for express
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

// Imports for ApolloServer
import { ApolloServer } from 'apollo-server-express'
import models from './models'
import schema from './schema'
import resolvers from './resolvers'

// Imports for Mongo
import User from './mongo_models/UserSchema'
import db from './utils/DBConnector'

const app = express()
app.use(cors())
app.use(morgan('combined'))
console.log(db.readyState)

app.get('/dbtest/:id', (req, res) => {
  console.log(`Going to look for a user with id ${req.params.id}`)
  User.find({ 'id': req.params.id }, (err, docs) => {
    if (err) console.log(err)
    res.send(docs)
  })
})

app.get('/dbtest/1337/1', (req, res) => {
  var thisUser = new User({ id: '1' })
  thisUser.save(err => {
    console.log(err)
  })
})

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: models.users[1]
  }
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8080 }, () => {
  console.log('Apollo Server on http://localhost:8080/graphql')
})
