const postsResolver = {
  Query: {
    post: async (_, { id }, context) => await context.db.collection('posts').findOne({id}),
    posts: (_, __, context) => context.db.collection('posts').find().toArray()
  },
  Mutation: {
    addPost: (_, { id, heading, text, photoUrl }, context) => {
      const newPost = {
        id,
        heading,
        text,
        created: new Date(),
        photoUrl
      }
      context.db.collection('posts').insertOne(newPost).then(data => data)
      return {
        code: '200',
        success: true,
        message: 'New post was successfuly added',
        post: newPost
      }
    }
  }
}

module.exports = postsResolver