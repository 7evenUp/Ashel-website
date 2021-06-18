const { gql } = require('apollo-server-express')

const typeDefs = gql`
  scalar Date
  scalar Upload

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }
`

module.exports = typeDefs