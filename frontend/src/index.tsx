import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'
import { AppRouter } from './AppRouter'

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
