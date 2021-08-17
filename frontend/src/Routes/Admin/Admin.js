import React from 'react'

import {
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

import Gallery from './Gallery'

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
          <li className={styles.list__item}>
            <NavLink  
              className={styles.list__link}
              activeClassName={styles.list__link_active}
              to="/admin/about">Инфа</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/admin/blog" render={() => (<div>2</div>)}/>
        <Route path="/admin/portfolio" component={<div>3</div>} />
        <Route path="/admin/gallery" component={Gallery} />
        <Route path="/admin/about" component={<div>1</div>} />
        <Redirect to="/admin" />
      </Switch>
    </>
  )
}

export default Admin