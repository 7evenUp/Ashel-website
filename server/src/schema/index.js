const { makeExecutableSchema, mergeTypeDefs } = require('graphql-tools')

const mainTypeDefs = require('./mainSchema')
const mainResolvers = require('./mainResolvers')
const { postsTypeDefs, postsResolver } = require('./posts')
const { galleryTypeDefs, galleryResolver } = require('./gallery')

const types = [
  mainTypeDefs,
  postsTypeDefs,
  galleryTypeDefs
]

module.exports.schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types, { all: true }),
  resolvers: [mainResolvers, postsResolver, galleryResolver]
})
