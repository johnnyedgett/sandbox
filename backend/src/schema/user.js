import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  type User {
    id: ID!
    username: String!
    gold: [Gold]
  }

  type Gold {
    serverName: String!
    locale: String!
    amount: Int!
  }
`