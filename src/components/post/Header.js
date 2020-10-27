import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ imageUrl, name, work }) => {
  return (
    <div className="header">
      <img className="profile-img rounded-circle" src="../img/profile.jpg" alt="" />
      <div className="identity">
        <Link to='/' className="name">{name}</Link>
        <small className="work">{work}</small>
      </div>
    </div>
  )
}

export default Header
