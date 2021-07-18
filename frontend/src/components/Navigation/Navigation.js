import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink
            className={styles.list__item}
            activeClassName={styles.list__item_active}
            to="/blog">Блог</NavLink>
        </li>
        <li>
          <NavLink
            className={styles.list__item}
            activeClassName={styles.list__item_active}
            to="/portfolio">Портфолио</NavLink>
        </li>
        <li>
          <NavLink
            className={styles.list__item}
            activeClassName={styles.list__item_active}
            to="/gallery">Галерея</NavLink>
        </li>
        <li>
          <NavLink
            className={styles.list__item}
            activeClassName={styles.list__item_active}
            to="/about">Обо мне</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation