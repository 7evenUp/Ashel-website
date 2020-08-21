import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  background: #232324;
  color: white;
  width: auto;
  flex: 1;
`

const MainContent = ({children}: any) => {
  return (
    <Main>
      {children}
    </Main>
  )
}

export { MainContent }