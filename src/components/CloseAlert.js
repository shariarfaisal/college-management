import React from 'react'
// import PropTypes from 'prop-types'

const CloseAlert = ({children,type}) => {
  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      {children}
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default CloseAlert
