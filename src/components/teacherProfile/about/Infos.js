import React,{ Fragment } from 'react'

function Infos({name,email,address,position,phone}) {
  return(
    <Fragment>
      <h1 className="my-4">About</h1>
      <p><strong>Name: </strong>{name}</p>
      <p><strong>Email: </strong>{email}</p>
      <p><strong>Address: </strong>{address}</p>
      <p><strong>Position: </strong>{position}</p>
      <p><strong>Phone: </strong>{phone}</p>
    </Fragment>
  )
}
export default Infos
