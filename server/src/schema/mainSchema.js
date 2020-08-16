const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Mutation {
    addPost(
      id: ID,
      heading: String,
      text: String,
      photoUrl: String
    ): AddPostMutationResponse!
  }

  type Query {
    posts: [Post!]!
    post(id: ID): Post!
  }
`

module.exports = typeDefs