import React from 'react'
import ClassItem from './ClassItem'

const Classes = ({classes,classId}) => {
  return (
    <div className="py-3 my-2 col-12" >
      <div className="row">
        {classes.map((c,i) => <ClassItem key={i} {...c} classId={classId} />)}
      </div>
    </div>
  )
}

export default Classes
