import React from 'react'
import Post from '../Post/Post'
import styles from './Posts.module.css'

const Posts = () => {
  return (
    <div className={styles.posts}>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts