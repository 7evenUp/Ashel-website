const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = require('./typeDefs/schema')
const resolvers = require('./resolvers/resolvers')

module.exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
