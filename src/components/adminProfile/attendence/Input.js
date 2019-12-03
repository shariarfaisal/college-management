import React from 'react'

const Input = ({value,set,plh}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={e => set(e.target.value)}
      className="form-control m-2"
      placeholder={plh}
    />
  )
}

export default Input
