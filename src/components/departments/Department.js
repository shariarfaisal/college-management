import React from 'react'
// import PropTypes from 'prop-types'
import Body from './Body'
const Department = ({name}) => {
  return (
    <div className="col-md-4">
      <div className="jumbotron" style={{minHeight:"400px"}}>
        <h2 className="text-center" style={{fontWeight: "400",letterSpacing: "10px"}}>{name}</h2>
        <Body name={name}/>
      </div>
    </div>
  )
}

export default Department
