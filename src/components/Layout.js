import React from 'react'
import LeftMenu from './LeftMenu'
import RightSection from './RightSection'
import './layout.scss'


const Layout = ({ children }) => {
  return(
    <div className="wrapper">
      <LeftMenu />
      <div className="content">
        { children }
      </div>
      <RightSection />
    </div>
  )
}
export default Layout
