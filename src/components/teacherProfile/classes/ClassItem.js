import React from 'react'
import { Link } from 'react-router-dom'

function ClassItem({ classId, id, day}) {
  return(
    <div className="col-sm-6 col-md-4 m-2 py-3 text-center rounded" style={{background: "rgba(200,201,202,.9)"}}>
      <Link className="text-dark" to={`/classes/${classId}/attendence/${id}`}><p className="m-0">{day.date}</p></Link>
    </div>
  )
}

export default ClassItem
