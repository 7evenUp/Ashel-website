import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import styles from './Header.module.css'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <NavLink
            className={styles.admin}
            activeClassName={styles.admin_active}
            to="/admin"><MdAccountCircle size={32} /></NavLink>
    </header>
  )
}

export default Header