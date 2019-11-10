import React from 'react'
import Header from './Header'
import Navigation from './Navigation'


const HeaderWithNav = ({children}) => {
  return (
    <Header>
      <Navigation />
      {children}
    </Header>
  )
}

export default HeaderWithNav
