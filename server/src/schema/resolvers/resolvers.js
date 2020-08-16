const { GraphQLScalarType } = require('graphql')
const { Kind } = require('graphql/language')

const resolvers = {
  MutationResponse: {
    __resolveType: (mutation, context, info) => {
      console.log('INSIDE MutationResponse resolver')
      return 'AddPostMutationResponse'
    }
  },
  Query: {
    admin: () => ({
      login: 'Artyom',
      password: '123'
    }),
    posts: (parent, args, context) => (
      context.db.collection('posts').findOne().then(data => {
        console.log('Im here')
        console.log(data)
        return data.a
      })
    )
  },
  Mutation: {
    post: (parent, args, context) => {
      const newPost = {
        id: args.id,
        heading: args.heading,
        text: args.text,
        photoUrl: args.photoUrl
      }
      console.log('NEW POST', newPost)
      context.db.collection('posts').insertOne(newPost).then(data => {
        console.log(data)
      })
      return newPost
    }
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
}

module.exports = resolvers
