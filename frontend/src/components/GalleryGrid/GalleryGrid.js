import React, { useEffect, useState } from 'react'
import PhotoItem from '../PhotoItem/PhotoItem'
import { gql, useQuery, useReactiveVar } from '@apollo/client'
import styles from './GalleryGrid.module.css'
import { filtersVar } from '../../cache/cache'

const GET_GALLERY = gql`
  query GetGallery($filter: [String!]!) {
    gallery(filter: $filter) {
      _id
      filter
      photo {
        filename
      }
      created
    }
  }
`

const GalleryGrid = () => {
  const filters = useReactiveVar(filtersVar)

  const { loading, error, data } = useQuery(GET_GALLERY, {
    variables: { filter: filters}
  })

  if (error) return `Error! ${error.message}`

  return (
    <div className={styles.gallery}>
      {loading ? 'Loading...' :
        data.gallery.map(el => (
          <PhotoItem
            key={el._id}
            src={`http://localhost:4000/static/img/${el.photo.filename}`}
            created={el.created}
            filter={el.filter} />
        ))
      }
    </div>
  )
}

export default GalleryGrid