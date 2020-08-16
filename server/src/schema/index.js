const { makeExecutableSchema } = require('graphql-tools')

const mainTypeDefs = require('./mainSchema')
const mainResolvers = require('./mainResolvers')
const postsTypeDefs = require('./posts/postsSchema')
const postsResolver = require('./posts/postsResolver')

module.exports.schema = makeExecutableSchema({
  typeDefs: [mainTypeDefs, postsTypeDefs],
  resolvers: [mainResolvers, postsResolver]
})
