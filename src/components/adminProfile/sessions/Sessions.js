import React from 'react'
import {Link} from 'react-router-dom'

const Sessions = ({sessions}) => {
  return (
    <div>
      <ul className="nav flex-column text-center">
        {
          sessions.map((s,i) => (
            <li key={i} className="nav-item">
              <Link style={{display: "inline-block"}} to={`session/${s.id}`} className="nav-link text-muted">{s.year}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sessions
