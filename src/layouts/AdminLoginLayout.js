import React from 'react'
import PropTypes from 'prop-types'

const AdminLoginLayout = ({children,error}) => {
  return (
    <div>
      <div className="row align-items-center" style={{minHeight: "100vh"}}>
        <div className="col-md-8 col-lg-6 mx-auto">
          {error &&
            <div className="alert alert-danger text-center">{error}</div>
          }
          <div className="card">
            <div className="card-header">
              <h3>Login</h3>
            </div>
            <div className="card-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLoginLayout
