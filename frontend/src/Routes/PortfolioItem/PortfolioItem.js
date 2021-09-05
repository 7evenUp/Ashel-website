import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams, useHistory } from 'react-router-dom'
import styles from './PortfilioItem.module.css'

const GET_PORTFOLIO_ITEM = gql`
  query GetPortfolioItem($_id: ID!) {
    work(_id: $_id) {
      heading
      text
      photo {
        filename
      }
      stack
      created
    }
  }
`

const PortfolioItem = () => {
    const { id } = useParams()
    const history = useHistory()

    const { loading, error, data } = useQuery(GET_PORTFOLIO_ITEM, {
        variables: { _id: id }
    })

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    const { photo, heading, text, stack, created } = data.work
    const date = new Date(created).toLocaleDateString()

    return (
      <>
        <button
          className={styles.button}
          type="button"
          onClick={() => history.goBack()}>Назад к работам
        </button>
        <div className={styles.top_info}>
          <img
            className={styles.img}
            src={`http://localhost:4000/static/img/${photo.filename}`}/>
          <div className={styles.right_info}>
            <div>
              <h3 className={styles.heading}>{heading}</h3>
              <span className={styles.date}>{date}</span>
            </div>
            <div className={styles.stack}>
              <span className={styles.stack_heading}>Стек технологий:</span>
              <div className={styles.stack_list}>
              {stack.map(stackItem => (
                <span className={styles.stack_item} key={stackItem}>{stackItem}</span>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom_info}>
          <p className={styles.text}>{text}</p>
        </div>
      </>
    )
}

export default PortfolioItem