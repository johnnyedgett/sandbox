import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { ApolloServer } from 'apollo-server-express'
// import uuidv4 from 'uuidv4'

import models from './models'
import schema from './schema'
import resolvers from './resolvers'
import getConnection from './utils/DBConnector'

const app = express()
app.use(cors())
app.use(morgan('combined'))
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
