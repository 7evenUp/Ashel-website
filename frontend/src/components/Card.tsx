import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface CardProps {
  heading?: string
}

const Wrapper = styled.div`
  padding: 3rem;
  color: white;
  font-size: 2.2rem;
  margin: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-family: 'Forum', cursive;
  box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.06), 10px 10px 20px rgba(0, 0, 0, 0.35);
  border-radius: 30px;

  &.card-info {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    margin-left: 4rem;
  }
  &.card-hobbies {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    margin-bottom: 2rem;
  }
  &.card-contacts {
    grid-column: 3 / 4;
    grid-row: 2 / 3;
    margin-right: 4rem;
    margin-bottom: 2rem;
  }
  &.card-news {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    margin-right: 4rem;
    margin-top: 2rem;
  }

  & h2 {
    font-family: 'Russo One', sans-serif;
    letter-spacing: 1.5px;
    font-size: 3rem;
  }
`

const Card: FunctionComponent<CardProps & React.HTMLAttributes<HTMLDivElement>> = ({ heading, children, className }) => {
  return (
    <Wrapper className={className}>
      { heading && <h2>{heading}</h2>}
      { children }
    </Wrapper>
  )
}

export { Card }