import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const AdminLoginLayout = ({children,error,title}) => {
  return (
    <CoreLayout>
      <Header />
      <div>
        <div className="row align-items-center" style={{minHeight: "70vh",width: "99%"}}>
          <div className="col-md-8 col-lg-6 mx-auto">
            {error &&
              <div className="alert alert-danger text-center">{error}</div>
            }
            <div className="card">
              <div className="card-header d-flex">
                <h3>{title}</h3>
                <Link to="/" className="ml-auto my-auto">Back home</Link>
              </div>
              <div className="card-body">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CoreLayout>
  )
}

export default AdminLoginLayout
