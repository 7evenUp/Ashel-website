import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { SortAndFilter, Posts } from '../../components'
import BlogItem from '../BlogItem/BlogItem'
import styles from './Blog.module.css'

const Blog = () => {
  let match = useRouteMatch()

  return (
    <section className={styles.section}>
      <Switch>
        <Route path={`${match.path}/:postId`} component={BlogItem} />
        <Route path={match.path}>
          <SortAndFilter />
          <span className={styles.span}></span>
          <Posts />
        </Route>
      </Switch>
    </section>
  )
}

export default Blog