const postsResolver = {
  Query: {
    post: async (_, { id }, context) => await context.db.collection('posts').findOne({id}),
    posts: (_, __, context) => context.db.collection('posts').find().toArray()
  },
  Mutation: {
    addPost: async (_, { heading, text, photoUrl }, context) => {
      const newPost = {
        heading,
        text,
        created: new Date(),
        photoUrl
      }
      
      const { insertedId } = await context.db.collection('posts').insertOne(newPost)
        
      return {
        code: '200',
        success: true,
        message: 'New post was successfuly added',
        post: {
          _id: insertedId,
          ...newPost
        }
      }
    }
  }
}

module.exports = postsResolver