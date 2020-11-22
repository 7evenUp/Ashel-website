const fs = require('fs')
const path = require('path')

const galleryResolver = {
  Query: {
    gallery: (_, __, context) => context.db.collection('gallery').find().toArray(),
    galleryItem: async (_, { _id }, context) => await context.db.collection('gallery').findOne({_id})
  },
  Mutation: {
    addGalleryItem: async (_, { filter, file }, context) => {
      const { file: {filename, mimetype, encoding, createReadStream} } = await file

      const writeableStream = fs.createWriteStream(path.join(__dirname, `/../../../img/${filename}`))
      const readStream = createReadStream()

      readStream.on('error', err => console.error(err))
      readStream.on('data', chunk => {
        writeableStream.write(chunk)
      })

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