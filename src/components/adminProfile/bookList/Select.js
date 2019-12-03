import React from 'react'
// import PropTypes from 'prop-types'

const Select = ({value,setValue,plh,options}) => (
  <div className="col-md-3 col-lg-3 my-2">
    <select onChange={e => setValue(e.target.value)} className="custom-select" value={value}>
      <option value="">{plh}</option>
      {options.map(i => <option key={i.id} value={i.id}>{i.name}</option>)}
    </select>
  </div>
)

export default Select
