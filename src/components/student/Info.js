import React from 'react'
import DeleteAccount from './DeleteAccount'


const Info = ({ id, name, roll, email, phone, department, semester,reg, shift, address, session }) => {
  return (
    <div className="jumbotron col-12">
      <h1 className="my-4">About</h1>
      <p><strong>Name: </strong>{name}</p>
      <p><strong>Email: </strong>{email}</p>
      <p><strong>Roll: </strong>{roll}</p>
      <p><strong>Reg: </strong>{reg}</p>
      <p><strong>Address: </strong>{address}</p>
      <p><strong>Phone: </strong>{phone}</p>
      <p><strong>Department: </strong>{department.name}</p>
      <p><strong>Semester: </strong>{semester.name}</p>
      <p><strong>Shift: </strong>{shift}</p>
      <p><strong>Session: </strong>{session.year}</p>
      <DeleteAccount id={id} name={name} roll={roll}/>
    </div>
  )
}

export default Info
