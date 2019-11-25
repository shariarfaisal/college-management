import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import Header from '../components/Header'

const Welcome = (props) => {
  return (
    <CoreLayout>
      <Header />
      <div className="row align-items-center" style={{height: "70vh",width: "99%"}}>
        <div className="col-md-6 mx-auto">
          <div className="jumbotron">
            <h1 className="text-center">Welcome</h1>
            <p className="text-center">Join as a <a href="/login/student">student</a> or <a href="/login/teacher">teacher</a></p>
          </div>
        </div>
      </div>
    </CoreLayout>
  )
}

export default Welcome
