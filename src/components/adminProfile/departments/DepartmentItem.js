import React,{ memo, useState } from 'react'
import {Link} from 'react-router-dom'
import Actions from './Actions'
import Update from './Update'

const styles = (isUpdateMode) => {
  return {
    background: !isUpdateMode ? "rgba(222, 226, 230, 0.32)" : "rgba(222, 226, 230, 0.71)",
    position: 'relative'
  }
}

const DepartmentItem = ({id,name,students}) => {
  const [isUpdateMode,setIsUpdateMode] = useState(false)
  return (
    <div className="col-12 my-2 p-5" style={styles(isUpdateMode)}>
      {!isUpdateMode && <div>
        <h3><Link className="card-title text-dark" to={`departments/${id}`}>{name}</Link></h3>
        <Link to="/students" className="text-muted">students <div className="badge badge-primary">{students.length}</div></Link>
        <Actions setIsUpdateMode={setIsUpdateMode}/>
      </div>}
      {isUpdateMode && <Update id={id} name={name} setIsUpdateMode={setIsUpdateMode}/>}
    </div>
  )
}

export default memo(DepartmentItem)
