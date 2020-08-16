const { makeExecutableSchema } = require('graphql-tools')

const mainTypeDefs = require('./mainSchema')
const mainResolvers = require('./mainResolvers')
const { postsResolver, postsTypeDefs } = require('./posts')

module.exports.schema = makeExecutableSchema({
  typeDefs: [mainTypeDefs, postsTypeDefs],
  resolvers: [mainResolvers, postsResolver]
})
