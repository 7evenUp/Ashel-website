import React from 'react'

import {
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

import Blog from './Blog'
import Gallery from './Gallery'
import Portfolio from './Portfolio'

import styles from './Admin.module.css'

const Admin = () => {
  return (
    <>
      <h1 className={styles.heading}>Админ панель</h1>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <NavLink 
              className={styles.list__link}
              activeClassName={styles.list__link_active}
              to="/admin/blog">Блог</NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink
              className={styles.list__link}
              activeClassName={styles.list__link_active}
              to="/admin/portfolio">Портфолио</NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink  
              className={styles.list__link}
              activeClassName={styles.list__link_active}
              to="/admin/gallery">Галерея</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/admin/blog" component={Blog}/>
        <Route path="/admin/portfolio" component={Portfolio} />
        <Route path="/admin/gallery" component={Gallery} />
        <Redirect to="/admin" />
      </Switch>
    </>
  )
}

export default Admin