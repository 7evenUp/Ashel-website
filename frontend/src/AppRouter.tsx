import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { Navigation } from './layouts/Navigation'
import { MainContent } from './layouts/Main'
import { PageLayout } from './layouts/PageLayout'
import { Homepage } from './pages/Homepage'
import { BlogPage } from './pages/BlogPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { GalleryPage } from './pages/GalleryPage'

const AppRouter = () => {
  return (
    <>
      <GlobalStyles />
      <PageLayout>
        <Navigation />
        <MainContent>
          <Switch>
            <Route path="/" exact><Homepage /></Route>
            <Route path="/blog"><BlogPage /></Route>
            <Route path="/portfolio"><PortfolioPage /></Route>
            <Route path="/gallery"><GalleryPage /></Route>
            <Redirect to="/" />
          </Switch>
        </MainContent>
      </PageLayout>
    </>
  )
}

export { AppRouter }