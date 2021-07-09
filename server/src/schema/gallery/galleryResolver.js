const uploadImage = require('../../utils/uploadImage')
const fs = require('fs')
const path = require('path')

// const writeableStream = fs.createWriteStream(path.join(process.cwd(), 'img', filename))
// const readStream = createReadStream()

// readStream.pipe(writeableStream)s

const galleryResolver = {
  Query: {
    gallery: async (_, { filter }, context) => {
      if (filter === undefined) return await context.db.collection('gallery').find().toArray()
      else return await context.db.collection('gallery').find({ filter: { $eq: filter } }).toArray()
    },
    galleryItem: async (_, { _id }, context) => await context.db.collection('gallery').findOne({_id})
  },
  Mutation: {
    addGalleryItem: async (_, { filter, file }, context) => {
      const { filename, mimetype, encoding, createReadStream } = await file
      uploadImage(createReadStream, filename)      

      const newGalleryItem = {
        filter,
        photo: {
          filename,
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