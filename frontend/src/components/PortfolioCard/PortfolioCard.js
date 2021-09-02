import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import styles from './PortfolioCard.module.css'

const PortfolioCard = ({src, heading, created, text, id}) => {
  const date = new Date(created).toLocaleDateString()
  let match = useRouteMatch()

  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={src}
        alt="work"/>
      <div className={styles.card__info}>
        <h3 className={styles.card__heading}>{heading}</h3>
        <span className={styles.card__date}>{date}</span>
        <p className={styles.card__text}>{text}</p>
        <Link to={`${match.url}/${id}`} className={styles.card__button}>Подробнее</Link>
      </div>
    </div>
  )
}

export default PortfolioCard