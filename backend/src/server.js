import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { ApolloServer, gql } from 'apollo-server-express'
// import uuidv4 from 'uuidv4'

// const express = require('express')
const app = express()
app.use(cors())
app.use(morgan('combined'))

var users = {
  1: {
    id: '1',
    username: 'Johnny Edgett',
    messageIds: [1]
  },
  2: {
    id: '2',
    username: 'Krithika Chandran',
    messageIds: [2]
  }
}

const me = users[1]

const schema = gql`
  type Query {
    me: User
    user(id: ID!): User
    users: [User!]

    messages: [Message!]!
    message(id: ID!): Message!
  }

  type Mutation {
    createMessage(text: String!): Message!
  }

  type User {
    id: ID!
    username: String!
    messages: [Message!]
  }

  type Message{
    id: ID!
    text: String!
    user: User!
  }
`

var messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1'
  },
  2: {
    id: '2',
    text: 'Goodbye World',
    userId: '2'
  }
}

const resolvers = {
  Query: {
    me: () => {
      return me
    },
    user: (parent, { id }) => {
      return users[id]
    },
    users: () => {
      return Object.values(users)
    },
    messages: () => {
      return Object.values(messages)
    },
    message: (parent, { id }) => {
      return messages[id]
    }
  },

  // Override the username from above
  User: {
    username: user => `potato`,
    messages: user => {
      return Object.values(messages).filter(
        message => message.userId === user.id
      )
    }
  },

  Message: {
    user: message => {
      return users[message.userId]
    }
  },

  Mutation: {
    createMessage: (parent, { text }, { me }) => {
      const id = new Date().getTime()
      const message = {
        id,
        text,
        userId: me.id
      }
      messages[id] = message
      users[me.id].messageIds.push(id)
      return message
    }
  }

  // Note
  // (parent, args, context, info) => { ... }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8080 }, () => {
  console.log('Apollo Server on http://localhost:8080/graphql')
})
