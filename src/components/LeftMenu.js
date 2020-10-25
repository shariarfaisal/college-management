import React from 'react'
import { Link } from 'react-router-dom'

const getLogout = (e) => {
  localStorage.removeItem('x-user-token')
  window.location = '/'
}

const LeftMenu = (props) => {
  return(
    <div className="left-menu">
      <div className="menu">
        <div className="menu-item">
          <i className="bx bx-home icon"></i>
          <Link to="/" className="name">Home</Link>
        </div>
        <div className="menu-item">
          <i className="bx bx-plus icon"></i>
          <Link to="/post/create" className="name">Create New</Link>
        </div>
        <div className="menu-item">
          <i className="bx bx-user icon"></i>
          <Link to="/profile" className="name">Profile</Link>
        </div>
        <div className="menu-item">
          <i className="bx bx-notepad icon"></i>
          <Link to="/profile/posts" className="name">My Posts</Link>
        </div>
        <div onClick={getLogout} className="menu-item">
          <i className="bx bx-log-out icon"></i>
          <div className="name">Logout</div>
        </div>

      </div>
    </div>
  )
}
export default LeftMenu
