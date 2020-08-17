const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`

module.exports = typeDefs