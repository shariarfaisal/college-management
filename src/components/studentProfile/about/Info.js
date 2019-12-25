import React from 'react'
import styled from 'styled-components'


const Info = ({ data, setIs }) => {
  return (
    <Styling className="jumbotron">
      <h1 className="my-4">About</h1>
      <p><strong>Name: </strong>{data.name}</p>
      <p><strong>Email: </strong>{data.email}</p>
      <p><strong>Roll: </strong>{data.roll}</p>
      <p><strong>Reg: </strong>{data.reg}</p>
      <p><strong>Address: </strong>{data.address}</p>
      <p><strong>Phone: </strong>{data.phone}</p>
      <p><strong>Department: </strong>{data.department.name}</p>
      <p><strong>Semester: </strong>{data.semester.name}</p>
      <p><strong>Shift: </strong>{data.shift}</p>
      <div onClick={e => setIs(true)} className="update-info">
        <span>Update Your Info</span>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  position: relative;
  transition: .3s;
  .update-info{
    position: absolute;
    top: 15%;
    right: 10%;
    color: #17A2B8;
    &:hover{
      cursor: pointer
      text-decoration: underline;
    }
  }
`

export default Info
