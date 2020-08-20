import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { BlogPage } from './pages/BlogPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { GalleryPage } from './pages/GalleryPage'

export const AppRouter = () => {
  return (
    <>
      <nav>
        <b>Navigation</b>
      </nav>
      <main>
        <Switch>
          <Route path="/" exact><Homepage /></Route>
          <Route path="/blog"><BlogPage /></Route>
          <Route path="/portfolio"><PortfolioPage /></Route>
          <Route path="/gallery"><GalleryPage /></Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </>
  )
}