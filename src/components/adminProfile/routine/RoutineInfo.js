import React from 'react'

const RoutineInfo = ({ routine }) => {
  const {title,shift,session,semester,department} = routine
  return (
    <div className="px-5 py-3 my-3 text-muted" style={{background: "rgba(184, 192, 199, 0.32)"}}>
      <h3 className="text-center">{title}</h3>
      <div className="d-flex justify-content-center">
        <p className="my-0 mx-3"><strong>Department: </strong>{department.name}</p>
        <p className="my-0 mx-3"><strong>Semester: </strong>{semester.name}</p>
        <p className="my-0 mx-3"><strong>Session: </strong>{session.year}</p>
        <p className="my-0 mx-3"><strong>Shift: </strong>{shift}</p>
      </div>
    </div>
  )
}

export default RoutineInfo
