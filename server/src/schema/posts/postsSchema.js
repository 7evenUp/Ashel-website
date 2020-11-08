const { gql } = require('apollo-server')

const postsTypeDefs = gql`
  "Пост для блога"
  type Post {
    _id: ID!
    heading: String!
    text: String!
    created: Date!
    filter: String!
    updated: Date
    photoUrl: String!
  }

  "Return value of inserted Post"
  type AddPostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post!
  }

  type Query {
    posts: [Post!]!
    post(_id: ID): Post!
  }

  type Mutation {
    addPost(
      heading: String,
      text: String,
      photoUrl: String,
      filter: String
    ): AddPostMutationResponse!
  }
`

module.exports.postsTypeDefs = postsTypeDefs