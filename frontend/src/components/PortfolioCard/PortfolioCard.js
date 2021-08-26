import React from 'react'
import styles from './PortfolioCard.module.css'

const PortfolioCard = ({src, heading, created, text}) => {
  const date = new Date(created).toLocaleDateString()
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
        <button className={styles.card__button} type="button">Подробнее</button>
      </div>
    </div>
  )
}

export default PortfolioCard