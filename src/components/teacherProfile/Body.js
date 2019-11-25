import React from 'react'
import Left from './Left'

const Body = ({children}) => {
  return (
    <div className="container">
      <div className="row justify-content-around">
        <Left />
        <div className="col-md-8 my-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Body
