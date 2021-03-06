const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')

const resolvers = {
  MutationResponse: {
    __resolveType: (mutation, context, info) => {
      if (mutation.post) {
        return 'AddPostMutationResponse'
      }
      if (mutation.galleryItem) {
        return 'AddGalleryItemMutationResponse'
      }
      return null
    }
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue: value => new Date(value), // value from the client
    serialize: value => value.getTime(), // value sent to the client
    parseLiteral: ast => ast.kind === Kind.INT ? parseInt(ast.value, 10) : null // ast value is always in string format
  })
}

module.exports = resolvers