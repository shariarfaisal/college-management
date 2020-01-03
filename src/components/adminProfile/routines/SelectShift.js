import React from 'react'

const SelectShift = ({value,setValue,options,plh}) => {
  return (
    <div className="form-group col-md-4 col-lg-3 my-2">
      <select  onChange={e => setValue(e.target.value)} className="form-control" value={value}>
        <option value="">{plh}</option>
        {options.map((op,i) => <option key={i} value={op}>{op}</option>)}
      </select>
    </div>
  )
}

export default React.memo(SelectShift)
