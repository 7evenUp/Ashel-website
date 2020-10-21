import React from 'react'
import styles from './PhotoItem.module.css'

const PhotoItem = ({src}) => {
  return (
    <div className={styles.photo}>
      <img className={styles.photo__img} src={src} alt="work" />
      <span className={styles.photo__date}>20.10.2020</span>
    </div>
  )
}

export default PhotoItem