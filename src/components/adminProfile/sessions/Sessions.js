import React from 'react'
import SessionItem from './SessionItem'

const Sessions = ({sessions}) => {
  return (
    <div>
      <ul className="nav flex-column text-center">
        {sessions.map((s,i) => <SessionItem key={i} {...s} /> )}
      </ul>
    </div>
  )
}

export default Sessions
