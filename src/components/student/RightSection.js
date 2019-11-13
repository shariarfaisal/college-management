import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LeftSection = ({ student }) => {

  return (
    <Styling className="col-md-3 text-center">
      <h3 className=" name my-3">{student.name}</h3>
      <p className=" about text-muted" data-toggle="collapse" data-target="#aboutCollapse" aria-expanded="false" aria-controls="aboutCollapse">about</p>
      <div className="collapse bg-light p-4 text-left text-capitalize show" id="aboutCollapse">
        <p><strong>roll: </strong>{student.roll}</p>
        <p><strong>reg: </strong>{student.reg}</p>
        <p><strong>department: </strong>{student.department.name}</p>
        <p><strong>semester: </strong>{student.semester.name}</p>
        <p><strong>shift: </strong>{student.shift}</p>
        <p><strong>session: </strong>{student.session.year}</p>
        <p><strong>address: </strong>{student.address}</p>
        <p><strong>phone: </strong>{student.phone}</p>
        <p><strong>email: </strong>{student.email}</p>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  manHeight: 50vh;
  .name{ color: #343a40cf }
  .about{ font-size: 20px; cursor: pointer; }
  .about:hover{ color: black !important;}

`

export default LeftSection
