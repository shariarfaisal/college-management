import React from 'react'

const Header = (props) => {
  return( 
    <header>
      <div className="logo">
        <h1>PotatoForum</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
