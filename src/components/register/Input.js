import React from 'react'
// import PropTypes from 'prop-types'

const Input = ({value,set,plh,type}) => {
  return (
    <div className="col-md-6 my-2">
      <input
        className="form-control"
        value={value}
        placeholder={plh}
        type={type}
        onChange={e => set(e.target.value)}
        required
      />
    </div>
  )
}

export default React.memo(Input)
