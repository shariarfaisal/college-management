import React from 'react'
import Left from './left/Index'

const Body = ({children}) => {
  return (
    <div className="mx-auto" style={{width: '80%'}}>
      <div className="row justify-content-around">
        <Left />
        <div className="col-md-9 my-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Body
