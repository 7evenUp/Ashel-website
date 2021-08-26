const uploadImage = require("../../utils/uploadImage")

const portfolioResolvers = {
  Query: {
    work: async (_, { _id }, context) => await context.db.collection('portfolio').findOne({_id}),
    works: async (_, __, context) => await context.db.collection('portfolio').find().toArray()
  },
  Mutation: {
    addWork: async (_, { heading, text, file, stack }, context) => {
      console.log('i am here')
      const { filename, mimetype, encoding, createReadStream } = await file
      uploadImage(createReadStream, filename)
      
      const newWork = {
        heading,
        text,
        created: new Date(),
        photo: {
          filename,
          mimetype,
          encoding
        },
        stack
      }

      const { insertedId } = await context.db.collection('portfolio').insertOne(newWork)

      return {
        code: '200',
        success: true,
        message: 'New work was successfully added',
        work: {
          _id: insertedId,
          ...newWork
        }
      }
    }
  }
}

module.exports = portfolioResolvers