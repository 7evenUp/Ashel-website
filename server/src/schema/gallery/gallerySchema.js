const { gql } = require('apollo-server')

const galleryTypeDefs = gql`
  "Фотография с описанием из галлереи"
  type GalleryItem {
    _id: ID!
    description: String
    photoUrl: String!
    created: Date!
    updated: Date
  }

  "Return value of inserted galleryPhoto"
  type AddGalleryItemMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    galleryItem: GalleryItem!
  }
`

const galleryQueryType = `
  gallery: [GalleryItem!]!
  galleryItem(_id: ID): GalleryItem!
`

const galleryMutationType = `
  addGalleryItem(
    photoUrl: String
    description: String
  )
`

module.exports.galleryTypeDefs = galleryTypeDefs
module.exports.galleryQueryType = galleryQueryType
module.exports.galleryMutationType = galleryMutationType