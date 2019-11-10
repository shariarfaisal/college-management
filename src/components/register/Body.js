import React from 'react'
// import PropTypes from 'prop-types'

const StudentLoginBody = ({children}) => {
  return (
    <div>
      <div className="row align-items-center mx-auto" style={{minHeight: "60vh",maxWidth: "98%"}}>
        <div className="col-md-10 col-lg-7 p-4 mx-auto" style={{minHeight: "400px",background: "#E9ECEF"}}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default React.memo(StudentLoginBody)
