import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 8px;
  }

  body {
    background: #232324;
    height: 100vh;
    font-size: 2rem;
    font-family: 'Arial', sans-serif;
  }
`

export { GlobalStyles }