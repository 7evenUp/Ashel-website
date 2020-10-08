import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Header } from './components'
import { Blog, Portfolio, Gallery, About } from './routes'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Switch>
          <Route path="/blog"       component={Blog} />
          <Route path="/portfolio"  component={Portfolio} />
          <Route path="/gallery"    component={Gallery} />
          <Route path="/about"      component={About} />
          <Redirect to="/blog" />
        </Switch>
      </main>
    </Router>
  )
}

export default App
