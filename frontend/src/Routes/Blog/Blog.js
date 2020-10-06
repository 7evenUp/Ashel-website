import React from 'react'
import { SortAndFilter, Posts } from '../../components'
import styles from './Blog.module.css'

const Blog = () => {
  return (
    <section className={styles.section}>
      <SortAndFilter />
      <span className={styles.span}></span>
      <Posts />
    </section>
  )
}

export default Blog