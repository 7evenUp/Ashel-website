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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Redirect to="/blog" />
        </Switch>
      </main>
    </Router>
  )
}

export default App
