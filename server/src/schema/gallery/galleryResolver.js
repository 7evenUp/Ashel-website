const galleryResolver = {
  Query: {
    gallery: (_, __, context) => context.db.collection('gallery').find().toArray(),
    galleryItem: async (_, { _id }, context) => await context.db.collection('gallery').findOne({_id})
  },
  Mutation: {
    addGalleryItem: async (_, { filter, file }, context) => {
      const newGalleryItem = {
        filter,
        file,
        created: new Date()
      }

      const { insertedId } = await context.db.collection('gallery').insertOne(newGalleryItem)

      return {
        code: '200',
        success: true,
        message: 'New photo was successfully added',
        galleryItem: {
          _id: insertedId,
          ...newGalleryItem
        }
      }
    }
  }
}

module.exports = galleryResolver