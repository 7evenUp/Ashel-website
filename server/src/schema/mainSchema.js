const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
`

module.exports = typeDefs