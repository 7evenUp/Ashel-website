import React from 'react'
import { gql, useQuery } from '@apollo/client'
import {
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom"
import PortfolioItem from '../PortfolioItem/PortfolioItem'
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
  let match = useRouteMatch()
  const { loading, error, data } = useQuery(GET_PORTFOLIO)

  if (error) return `Error! ${error.message}`

  return (
    <>
      <h2 className={styles.heading}>Мои работы</h2>
      <Switch>
        <Route path={`${match.path}/:id`} component={PortfolioItem} />
        <Route path={`${match.path}`}>
          <div className={styles.works}>
            { loading ? 'Loading...' : 
              data.works.map(el => (
                <PortfolioCard
                  key={el._id}
                  id={el._id}
                  src={`http://localhost:4000/static/img/${el.photo.filename}`}
                  created={el.created}
                  heading={el.heading}
                  text={el.text}
                  />
              ))
            }
          </div>
        </Route>
      </Switch>
    </>
  )
}

export default Portfolio