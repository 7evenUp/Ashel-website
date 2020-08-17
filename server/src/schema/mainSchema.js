const { gql } = require('apollo-server')
const { postsQueryType, postsMutationType } = require('./posts/postsSchema')
const { galleryQueryType, galleryMutationType } = require('./gallery/gallerySchema')

const typeDefs = gql`
  scalar Date

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type Mutation {
    ${postsMutationType}
  }

  type Query {
    ${postsQueryType}
  }
`

module.exports = typeDefs