import React from 'react'
import styles from './Post.module.css'

const Post = ({ heading, text, src, created, filter }) => {
  return (
    <div className={`${styles.post} card`}>
      <div style={{marginRight: 'auto'}}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.paragraph}>{text}</p>
      </div>
      <div className={styles.br}></div>
      <div className={styles.right}>
        <img src={src} alt="img" className={styles.img}/>
        <button type="button" className={styles.button}>Подробнее</button>
      </div>
    </div>
  )
}

export default Post