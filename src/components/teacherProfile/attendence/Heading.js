import React from 'react'

function Heading({ date }) {
  return(
    <div className="col-12 py-3 my-2 text-center text-dark">
      <h4>Attendence</h4>
      <p>{date}</p>
    </div>
  )
}
export default Heading
