import React from 'react'
import { node } from 'prop-types'

// import styles from './MainLayout.module.scss'

import A11yNavigation from '../../Primitive/A11yNavigation'
import Footer from '../../Structure/Footer'
import Header from '../../Structure/Header'
import Main from '../../Structure/Main'
import Navigation from '../../Structure/Navigation'
import SiteContainer from '../../Structure/SiteContainer'

const MainLayout = ({ children }) => (
  <SiteContainer>
    <A11yNavigation>
      <a href="#content">Jump to main content</a>
      <a href="#navigation">Jump to primary navigation</a>
    </A11yNavigation>
    <Header
      navigation={
        <Navigation id="navigation">
          <Navigation.Item to="/" active>
            Home
          </Navigation.Item>
          <Navigation.Item to="/movies">Movies</Navigation.Item>
        </Navigation>
      }
    />
    <Main>{children}</Main>
    <Footer />
  </SiteContainer>
)

MainLayout.propTypes = {
  children: node.isRequired
}

export default MainLayout