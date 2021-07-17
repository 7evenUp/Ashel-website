import React from 'react'
import styles from './PhotoItem.module.css'

const PhotoItem = ({src, created, filter}) => {
  const date = new Date(created).toLocaleDateString()
  return (
    <div className={styles.photo}>
      <img className={styles.photo__img} src={src} alt={filter} />
      <span className={styles.photo__date}>{date}</span>
    </div>
  )
}

export default PhotoItem