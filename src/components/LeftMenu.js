import React from 'react'

const LeftMenu = (props) => {
  return(
    <div className="left-menu">
      <div className="menu">
        <div className="menu-item">
          <i className="bx bx-home icon"></i>
          <span className="name">Home</span>
        </div>
        <div className="menu-item">
          <i className="bx bx-plus icon"></i>
          <span className="name">Create New</span>
        </div>
        <div className="menu-item">
          <i className="bx bx-user icon"></i>
          <span className="name">Profile</span>
        </div>
        <div className="menu-item">
          <i className="bx bx-notepad icon"></i>
          <span className="name">My Posts</span>
        </div>

      </div>
    </div>
  )
}
export default LeftMenu
