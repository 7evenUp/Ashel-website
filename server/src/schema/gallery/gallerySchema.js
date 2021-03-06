const { gql } = require('apollo-server')

const galleryTypeDefs = gql`
  "Фотография с описанием из галлереи"
  type GalleryItem {
    _id: ID!
    filter: String!
    photo: File!
    created: Date!
  }

  "Return value of inserted galleryPhoto"
  type AddGalleryItemMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    galleryItem: GalleryItem!
  }

  type Query {
    gallery: [GalleryItem!]!
    galleryItem(_id: ID): GalleryItem!
  }

  type Mutation {
    addGalleryItem(
      file: Upload!
      filter: String!
    ): AddGalleryItemMutationResponse!
  }
`

module.exports.galleryTypeDefs = galleryTypeDefs