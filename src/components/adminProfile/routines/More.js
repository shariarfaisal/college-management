import React from 'react'

const More = ({ length, skipper }) => (
  length > 9 && <div onClick={skipper} className="col-12 py-2 my-3 text-center" style={{background: "rgba(184, 192, 199, 0.32)",cursor: 'pointer'}}>
    <strong>more</strong>
  </div>
)

export default More
