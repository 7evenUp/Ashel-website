const { gql } = require('apollo-server')
const { postsQueryType, postsMutationType } = require('./posts/postsSchema')

const typeDefs = gql`
  scalar Date

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Mutation {
    ${postsMutationType}
  }

  type Query {
    ${postsQueryType}
  }
`

module.exports = typeDefs