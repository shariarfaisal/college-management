import React from 'react'
// import PropTypes from 'prop-types'

const Select = ({value,setValue,options,plh}) => {
  return (
    <div className="form-group col-md-4 my-2">
      <select onChange={e => setValue(e.target.value)} className="form-control" value={value}>
        <option value="0">Select {plh}</option>
        {
          options.map(({id,name}) => (
            <option key={id} value={id}>{name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select
