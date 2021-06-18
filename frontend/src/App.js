import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { Header } from './components'
import { Blog, Portfolio, Gallery, About, Admin } from './routes'
import './App.css'

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'http://localhost:4000/graphql'
  }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <main className="container">
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} />
            <Route path="/admin" component={Admin} />
            <Redirect to="/blog" />
          </Switch>
        </main>
      </Router>
    </ApolloProvider>
    
  )
}

export default App
