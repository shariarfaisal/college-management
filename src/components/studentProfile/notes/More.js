import React from 'react'

const More = ({ skip, first, setSkip, dataLength }) => {
  const skipHandler = (e) => {
    if(dataLength < first){
      setSkip(0)
    }else{
      setSkip(skip+first)
    }
  }

  return (
    <div onClick={skipHandler} style={{cursor: 'pointer'}} className="text-center list-group-item list-group-item-action list-group-item-primary">
      <h5 className="mb-0">More</h5>
    </div>
  )
}

export default More
