const { ObjectId } = require('mongodb')
const path = require('path')
const uploadImage = require('../../utils/uploadImage')

const galleryResolver = {
  Query: {
    gallery: async (_, { filter }, context) => {
      if (!filter.length) return await context.db.collection('gallery').find().toArray()
      else return await context.db.collection('gallery').find({ filter: { $in: filter } }).toArray()
    },
    galleryItem: async (_, { _id }, context) => await context.db.collection('gallery').findOne({_id: ObjectId(_id)})
  },
  Mutation: {
    addGalleryItem: async (_, { filter, file }, context) => {
      const { filename, mimetype, encoding, createReadStream } = await file
      uploadImage(createReadStream, filename, 'gallery')      

      const newGalleryItem = {
        filter,
        photo: {
          filename: path.join('gallery', filename),
          mimetype,
          encoding,
        },
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