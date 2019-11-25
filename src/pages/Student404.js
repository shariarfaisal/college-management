import React from 'react'
import StudentLayout from '../layouts/StudentLayout'

const Student404 = (props) => {
  return (
    <StudentLayout>
      <div className="row align-items-center" style={{height: "50vh"}}>
        <div className="col-md-12 mx-auto">
          <div className="jumbotron">
            <h1 className="text-center">404</h1>
          </div>
        </div>
      </div>
    </StudentLayout>
  )
}

export default Student404
