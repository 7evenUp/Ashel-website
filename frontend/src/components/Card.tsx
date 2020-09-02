import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface CardProps {
  heading?: string
}

const Wrapper = styled.div`
  background: grey;
  padding: 24px;

  &.card-info {
    background: red;
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }
  &.card-hobbies {
    background: green;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
  &.card-contacts {
    background: cyan;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  }
  &.card-news {
    background: orange;
    grid-column: 2 / 4;
    grid-row: 3 / 4;
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