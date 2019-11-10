import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const items = [
  {name: 'Students',link: '/students/'},
  {name: 'Routines',link: '/routines/'},
  {name: 'Results',link: '/results/'},
]


const Body = ({name}) => {
  return (
    <div className="container mt-3">
      <ul className="nav bg-dark justify-content-center">
        {items.map((item,i) =>(
          <li key={i} className="nav-item">
            <Link className="nav-link text-light" to={item.link+name.toLowerCase()}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Body
