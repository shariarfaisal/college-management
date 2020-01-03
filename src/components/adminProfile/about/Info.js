import React from 'react'

function Info({ name, email, username }) {
  return(
    <div>
      <h3>{name}</h3>
      <p className="mb-0"><strong>Email: </strong>{email}</p>
      <p className="mb-0"><strong>Username: </strong>{username}</p>
    </div>
  )
}
export default Info
