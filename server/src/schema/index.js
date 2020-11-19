const { makeExecutableSchema, mergeTypeDefs, mergeResolvers } = require('graphql-tools')

const mainTypeDefs = require('./mainSchema')
const mainResolvers = require('./mainResolvers')
const { postsTypeDefs, postsResolver } = require('./posts')
const { galleryTypeDefs, galleryResolver } = require('./gallery')
const { portfolioTypeDefs, portfolioResolver } = require('./portfolio')

const types = [
  mainTypeDefs,
  postsTypeDefs,
  galleryTypeDefs,
  portfolioTypeDefs
]

const resolversArray = [
  mainResolvers,
  postsResolver,
  galleryResolver,
  portfolioResolver
]

module.exports.schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types, { all: true }),
  resolvers: mergeResolvers(resolversArray)
})
