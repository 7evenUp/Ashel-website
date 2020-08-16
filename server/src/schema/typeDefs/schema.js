const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar Date
  "Админ, в частности я"
  type Admin {
    login: String!
    password: String!
  }

  "Пост для блога"
  type Post {
    id: ID!
    heading: String!
    text: String!
    created: Date!
    updated: Date
    photoUrl: String!
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type AddPostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post!
  }

  type Query {
    admin: Admin!
    posts: [Post!]!
    post(id: ID): Post!
  }

  type Mutation {
    addPost(
      id: ID,
      heading: String,
      text: String,
      photoUrl: String
    ): AddPostMutationResponse!
  }
`

module.exports = typeDefs