const { gql } = require('apollo-server')

const typeDefs = gql`
  type Admin {
    login: String!
    password: String!
  }

  type Query {
    admin: Admin!
  }
`

module.exports = typeDefs