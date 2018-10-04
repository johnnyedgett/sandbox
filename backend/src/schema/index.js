import { gql } from 'apollo-server-express'

import userSchema from './user'

// This schema will define the types that other schemas will extend
// No official way to combine schemas so this way is used
// This is known as "schema stitching"
const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [linkSchema, userSchema]
