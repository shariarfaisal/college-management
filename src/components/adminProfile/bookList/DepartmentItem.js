import React from 'react'
import ListItem from './ListItem'

const DepartmentItem = ({id,name,bookLists,i}) => {
  return (
    <div className="col-md-12 my-3 py-2 border rounded" style={{background:"#E9ECEF"}}>
      <h2 className="my-3 text-center border text-info py-3" data-toggle="collapse" data-target={`#collapse${id}`} style={{cursor: "pointer"}}>{name}</h2>
      <div className={`collapse row justify-content-center ${i === 0 ? 'show' : ''}`} id={`collapse${id}`}>
        {
          bookLists.map((b,i) => (
            <ListItem key={i} {...b} i={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default DepartmentItem
