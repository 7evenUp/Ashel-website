const { gql } = require('apollo-server-express')

const portfolioTypeDefs = gql`
  "Тип работы из портфолио"
  type Work {
    _id: ID!
    heading: String!
    created: Date!
    text: String!
    photo: File!
    stack: [String!]!
  }

  type AddWorkMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    work: Work!
  }

  type Query {
    works: [Work!]!
    work(_id: ID!): Work!
  }

  type Mutation {
    addWork(
      heading: String!,
      text: String!,
      file: Upload!,
      stack: [String!]!
    ): AddWorkMutationResponse
  }
`

module.exports.portfolioTypeDefs = portfolioTypeDefs