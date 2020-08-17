const { makeExecutableSchema, mergeTypeDefs, mergeResolvers } = require('graphql-tools')

const mainTypeDefs = require('./mainSchema')
const mainResolvers = require('./mainResolvers')
const { postsTypeDefs, postsResolver } = require('./posts')
const { galleryTypeDefs, galleryResolver } = require('./gallery')

const types = [
  mainTypeDefs,
  postsTypeDefs,
  galleryTypeDefs
]

const resolversArray = [
  mainResolvers,
  postsResolver,
  galleryResolver
]

module.exports.schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types, { all: true }),
  resolvers: mergeResolvers(resolversArray)
})
