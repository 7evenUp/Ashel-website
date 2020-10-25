import React from 'react'
import styles from './PortfolioCard.module.css'
import img from '../../img/gallery/5.jpg'

const PortfolioCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={img} alt="work"/>
      <div className={styles.card__info}>
        <h3 className={styles.card__heading}>Веб-сайт</h3>
        <span className={styles.card__date}>02.10.2020</span>
        <p className={styles.card__text}>Voluptatibus itaque repellat eos cum molestias et consequatur laudantium asperiores.</p>
        <button className={styles.card__button} type="button">Подробнее</button>
      </div>
    </div>
  )
}

export default PortfolioCard