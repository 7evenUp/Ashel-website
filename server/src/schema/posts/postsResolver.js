const postsResolver = {
  Query: {
    post: async (_, { _id }, context) => await context.db.collection('posts').findOne({_id}),
    posts: (_, __, context) => context.db.collection('posts').find().toArray()
  },
  Mutation: {
    addPost: async (_, { heading, text, photoUrl, filter }, context) => {
      const newPost = {
        heading,
        text,
        filter,
        created: new Date(),
        photoUrl
      }

      const { insertedId } = await context.db.collection('posts').insertOne(newPost)

      return {
        code: '200',
        success: true,
        message: 'New post was successfully added',
        post: {
          _id: insertedId,
          ...newPost
        }
      }
    }
  }
}

module.exports = postsResolver