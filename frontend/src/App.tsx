import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './apolloClient'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Hello world!</h1>
    </ApolloProvider>
  );
}

export default App
