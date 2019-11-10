import React from 'react'
// import PropTypes from 'prop-types'

const SelectShift = ({value,set,options,plh,id}) => {
  return (
    <div className="form-group col-md-4 col-lg-3 my-2">
      <select multiple={false} onChange={e => set(e.target.value)} className="form-control" value={value}>
        <option value="">{plh}</option>
        {
          options.map((op,i) => (
            <option key={i} value={op}>{op}</option>
          ))
        }
      </select>
    </div>
  )
}

export default React.memo(SelectShift)
