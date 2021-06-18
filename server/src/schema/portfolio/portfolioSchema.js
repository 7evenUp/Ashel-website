const { gql } = require('apollo-server-express')

const portfolioTypeDefs = gql`
  "Тип работы из портфолио"
  type Work {
    _id: ID!
    heading: String!
    created: Date!
    text: String!
    photoUrl: String!
  }

  type AddWorkMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    work: Work!
  }

  type Query {
    works: [Work!]!
    work(_id: ID): Work!
  }

  type Mutation {
    addWork(
      heading: String,
      text: String,
      photoUrl: String
    ): AddWorkMutationResponse
  }
`

module.exports.portfolioTypeDefs = portfolioTypeDefs