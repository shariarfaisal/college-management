import React from 'react'
import {Link} from 'react-router-dom'

const DepartmentItem = ({id,name,students}) => {
  return (
    <div className="col-12 my-2 p-5" style={{background: "rgba(222, 226, 230, 0.32)"}}>
      <div>
        <h3><Link className="card-title text-dark" to={`departments/${id}`}>{name}</Link></h3>
        <Link to="/students" className="text-muted">students <div className="badge badge-primary">{students.length}</div></Link>
      </div>
    </div>
  )
}

export default DepartmentItem
