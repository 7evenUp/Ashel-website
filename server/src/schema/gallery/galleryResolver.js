const galleryResolver = {
  Query: {
    gallery: (_, __, context) => context.db.collection('gallery').find().toArray(),
    galleryItem: async (_, { _id }, context) => await context.db.collection('gallery').findOne({_id})
  },
  Mutation: {
    addGalleryItem: async (_, { description, photoUrl }, context) => {
      const newGalleryItem = {
        description,
        created: new Date(),
        photoUrl
      }
      
      const { insertedId } = await context.db.collection('gallery').insertOne(newGalleryItem)
        
      return {
        code: '200',
        success: true,
        message: 'New photo was successfuly added',
        post: {
          _id: insertedId,
          ...newGalleryItem
        }
      }
    }
  }
}

module.exports = galleryResolver