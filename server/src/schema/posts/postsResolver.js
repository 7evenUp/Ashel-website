const postsResolver = {
  Query: {
    posts: (parent, args, context) => (
      context.db.collection('posts').findOne().then(data => {
        console.log('Im here')
        console.log(data)
        return data.a
      })
    )
  },
  Mutation: {
    addPost: (parent, args, context, info) => {
      const { id, heading, text, photoUrl } = args
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