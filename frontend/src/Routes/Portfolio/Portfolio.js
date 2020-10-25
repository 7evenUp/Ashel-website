import React from 'react'
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  return (
    <>
      <h2 className={styles.heading}>Мои работы</h2>
      <div className={styles.works}>
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </>
  )
}

export default Portfolio