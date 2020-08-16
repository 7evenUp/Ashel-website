const { gql } = require('apollo-server')

const postsTypeDefs = gql`
  "Пост для блога"
  type Post {
    id: ID!
    heading: String!
    text: String!
    created: Date!
    updated: Date
    photoUrl: String!
  }

  "Return value for inserting a Post"
  type AddPostMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    post: Post!
  }
`

module.exports = postsTypeDefs