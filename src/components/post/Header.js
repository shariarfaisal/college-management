import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ imageUrl, name, work, createdAt }) => {
  return (
    <div className="d-flex">
      <img className="rounded-circle mx-2 shadow-md" width="30px" height="30px" src="../img/profile.jpg" alt="" />
      <div className="px-3">
        <Link to='/' className="text-muted" style={{fontSize: '1.3rem'}}>{name}</Link>
        {work && <div style={{fontSize: '1rem'}} className="text-muted">{work}</div>}
      </div>
    </div>
  )
}

export default Header
