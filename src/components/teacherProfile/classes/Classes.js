import React from 'react'
import { Link } from 'react-router-dom'

const Classes = ({classes,classId}) => {
  return (
    <div className="py-3 my-2 col-12" >
      <div className="row">
      {
        classes.map((c,i) => (
          <div key={i} className="col-sm-6 col-md-4 m-2 py-3 text-center rounded" style={{background: "rgba(200,201,202,.9)"}}>
            <Link className="text-dark" to={`/classes/${classId}/attendence/${c.id}`}><p className="m-0">{c.day.date}</p></Link>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Classes
