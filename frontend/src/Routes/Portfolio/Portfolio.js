import React from 'react'
import { gql, useQuery } from '@apollo/client'
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard'
import styles from './Portfolio.module.css'

const GET_PORTFOLIO = gql`
  query GetPortfolio {
    works {
      _id
      heading
      text
      photo {
        filename
      }
      created
    }
  }
`

const Portfolio = () => {
  const { loading, error, data } = useQuery(GET_PORTFOLIO)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <h2 className={styles.heading}>Мои работы</h2>
      <div className={styles.works}>
        {data.works.map(el => (
          <PortfolioCard
            key={el._id}
            src={`http://localhost:4000/static/img/${el.photo.filename}`}
            created={el.created}
            heading={el.heading}
            text={el.text}
            />
        ))}
      </div>
    </>
  )
}

export default Portfolio