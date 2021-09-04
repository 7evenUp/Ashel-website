import React from 'react'
import { gql, useQuery } from '@apollo/client'
import Post from '../Post/Post'
import styles from './Posts.module.css'

const GET_POSTS = gql`
  query GetPosts {
    posts {
      _id
      heading
      text
      filter
      photo {
        filename
      }
      created
    }
  }
`

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS)
  
  if (error) return `Error! ${error.message}`

  return (
    <div className={styles.posts}>
      { loading ? 'Loading ...' : 
        data.posts.map(el => (
          <Post
            key={el._id}
            src={`http://localhost:4000/static/img/${el.photo.filename}`}
            created={el.created}
            filter={el.filter}
            heading={el.heading}
            text={el.text} />
        ))
      }
      
    </div>
  )
}

export default Posts