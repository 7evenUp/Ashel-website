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
      const newPost = {
        id: args.id,
        heading: args.heading,
        text: args.text,
        created: new Date(),
        photoUrl: args.photoUrl
      }
      // console.log('NEW POST', newPost)
      context.db.collection('posts').insertOne(newPost).then(data => {
        // console.log(data)
      })
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