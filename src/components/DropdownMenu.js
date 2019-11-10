import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

const DropdownMenu = ({name,subs}) => {
  return (
    <li className="dropdown nav-item">
      <Link className="nav-link dropdown-toggle text-light" to="/" data-toggle="dropdown" id={`dropdown-${name}`}>
        {name}
      </Link>
      <div className="dropdown-menu bg-dark" aria-labelledby="loginDropdown">
        {
          subs.map((s,i) => (
            <Link key={i} className="dropdown-item text-light" to={s.link}>{s.name}</Link>
          ))
        }
      </div>
    </li>
  )
}

export default DropdownMenu
