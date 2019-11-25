import React from 'react'
import {Link} from 'react-router-dom'

const Semesters = ({semesters}) => {
  return (
    <ul className="nav flex-column text-center">
      {semesters.map((s,i) => (
        <li key={i} className="nav-item">
          <Link className="text-muted nav-link px-4" to={`semester/${s.id}`}>{s.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Semesters
