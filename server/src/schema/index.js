const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./typeDefs/schema')
const postsResolver = require('./resolvers/postsResolver')
const resolver1 = require('./resolvers/resolvers')

module.exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers: [postsResolver, resolver1]
})
