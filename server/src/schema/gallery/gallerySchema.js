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

  type Query {
    gallery: [GalleryItem!]!
    galleryItem(_id: ID): GalleryItem!
  }

  type Mutation {
    addGalleryItem(
      photoUrl: String
      description: String
    ): AddGalleryItemMutationResponse!
  }
`

module.exports.galleryTypeDefs = galleryTypeDefs