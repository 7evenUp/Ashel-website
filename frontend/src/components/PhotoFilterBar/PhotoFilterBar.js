import React from 'react'
import { filtArray } from './hardcode'
import styles from './PhotoFilterBar.module.css'

const PhotoFilterBar = () => {
  return (
    <div className={styles.filter_bar}>
      <h2 className={styles.heading}>Фильтры</h2>
      <form className={styles.form}>
        {filtArray.map(({ id, name }) => {
          return (
            <div className={styles.checkbox} key={id}>
              <input className={styles.checkbox__input} type="checkbox" id={id} />
              <label className={styles.checkbox__label} htmlFor={id}>{name}</label>
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default PhotoFilterBar
