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

const postsQueryType = `
  posts: [Post!]!
  post(id: ID): Post!
`

const postsMutationType = `
  addPost(
    id: ID,
    heading: String,
    text: String,
    photoUrl: String
  ): AddPostMutationResponse!
`

module.exports.postsTypeDefs = postsTypeDefs
module.exports.postsQueryType = postsQueryType
module.exports.postsMutationType = postsMutationType