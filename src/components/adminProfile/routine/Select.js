import React from 'react'

const Select = ({value,setValue,days,plh}) => {
  return (
    <div className="form-group col-md-4 my-2">
      <select onChange={e => setValue(e.target.value)} className="form-control" value={value}>
        <option value="">Select {plh}</option>
        {
          days.map(({id,day}) => (
            <option key={id} value={id}>{day}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Select
