import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams, useHistory } from 'react-router-dom'

import styles from './BlogItem.module.css'

const GET_BLOG_ITEM = gql`
  query GetBlogItem($_id: ID!) {
    post(_id: $_id) {
      heading
      text
      photo {
        filename
      }
      created
    }
  }
`

const BlogItem = () => {
    const { postId } = useParams()
    const history = useHistory()

    const { loading, error, data } = useQuery(GET_BLOG_ITEM, {
      variables: { _id: postId }
    })

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    const { photo, heading, text, created } = data.post
    const date = new Date(created).toLocaleDateString()

    return (
      <article className={styles.article}>
        <button
          className={styles.button}
          type="button"
          onClick={() => history.goBack()}>Назад
        </button>
        <div className={styles.top_info}>
          <div style={{display: 'flex', alignItems: 'baseline', gap: 32}}>
            <h2 className={styles.heading}>{heading}</h2>
            <span className={styles.date}>{date}</span>
          </div>
          
          <img
            className={styles.img}
            src={`http://localhost:4000/static/img/${photo.filename}`}
            alt="blog-item"/>
        </div>
        <div className={styles.bottom_info}>
          <p className={styles.text}>{text}</p>
        </div>
      </article>
    )
}

export default BlogItem
