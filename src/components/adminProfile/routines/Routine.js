import React,{ memo } from 'react'
import { Link } from 'react-router-dom'


const Routine = ({id,title,department,session,semester}) => (
  <div className="col-12 py-3 my-2" style={{background: 'rgba(222, 226, 230, 0.32)'}}>
    <h3 className="py-3 text-muted m-0"><Link to={`routines/${id}`} className="text-dark">{title}</Link></h3>
    <p className="text-muted m-0"><strong>Department: </strong> {department.name}</p>
    <p className="text-muted m-0"><strong>Semester: </strong> {semester.name}</p>
    <p className="text-muted m-0"><strong>Session: </strong> {session.year}</p>
  </div>
)



export default memo(Routine)
