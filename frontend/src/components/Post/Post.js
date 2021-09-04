import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import styles from './Post.module.css'

const Post = ({ heading, text, src, id }) => {
  const match = useRouteMatch()

  return (
    <div className={`${styles.post} card`}>
      <div style={{marginRight: 'auto'}}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.paragraph}>{text}</p>
      </div>
      <div className={styles.br}></div>
      <div className={styles.right}>
        <img src={src} alt="img" className={styles.img}/>
        <Link to={`${match.url}/${id}`} type="button" className={styles.button}>Подробнее</Link>
      </div>
    </div>
  )
}

export default Post