import React from 'react'
import {Link} from 'react-router-dom'

const SessionItem = ({ id, year }) => (
  <li className="nav-item">
    <Link style={{display: "inline-block"}} to={`session/${id}`} className="nav-link text-muted">{year}</Link>
  </li>
)

export default SessionItem
