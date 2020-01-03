import React from 'react'
import ClassItem from './ClassItem'

const Classes = ({ item, result }) => {
  return (
    <div className="row justify-content-center">
      <h3 className="text-center col-12 my-4" style={{letterSpacing: '3px'}}>{item}</h3>
      {result[item].map((a,i) => <ClassItem key={i} {...a}/>)}
    </div>
  )
}

export default Classes
