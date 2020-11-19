const portfolioResolvers = {
  Query: {
    work: async (_, { _id }, context) => await context.db.collection('portfolio').findOne({_id}),
    works: (_, __, context) => context.db.collection('portfolio').find().toArray()
  },
  Mutation: {
    addWork: async (_, { heading, text, photoUrl }, context) => {
      const newWork = {
        heading,
        text,
        created: new Date(),
        photoUrl
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