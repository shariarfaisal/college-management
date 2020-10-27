import React from 'react'
import Header from './Header'
import './layout.scss'


const Layout = ({ children }) => {
  return(
    <div className="layout">
      <Header />
      <div className="layout-content container">
        { children }
      </div>
    </div>
  )
}
export default Layout
