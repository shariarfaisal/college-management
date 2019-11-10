import React from 'react'
// import PropTypes from 'prop-types'

const FormGroup = ({ type,value,set,id,plh }) => (
  <div className="form-group">
    <label htmlFor={id}>{plh}</label>
    <input
      className="form-control"
      type={type}
      value={value}
      id={id}
      onChange={e => set(e.target.value)}
      placeholder={plh}
    />
  </div>
)

export default FormGroup
