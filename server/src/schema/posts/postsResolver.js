const { ObjectId } = require('mongodb')
const uploadImage = require("../../utils/uploadImage")

const postsResolver = {
  Query: {
    post: async (_, { _id }, context) => await context.db.collection('posts').findOne({_id: ObjectId(_id)}),
    posts: (_, __, context) => context.db.collection('posts').find().toArray()
  },
  Mutation: {
    addPost: async (_, { heading, text, file, filter }, context) => {
      const { filename, mimetype, encoding, createReadStream } = await file
      uploadImage(createReadStream, filename)

      const newPost = {
        heading,
        text,
        filter,
        created: new Date(),
        photo: {
          filename,
          mimetype,
          encoding
        }
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