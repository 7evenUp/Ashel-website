import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface CardProps {
  heading?: string
}

const Wrapper = styled.div`
  background: grey;
  padding: 24px;
`

const Card: FunctionComponent<CardProps> = ({ heading, children }) => {
  return (
    <Wrapper>
      { heading && <h2>{heading}</h2>}
      { children }
    </Wrapper>
  )
}

export { Card }