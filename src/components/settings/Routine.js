import React from 'react'

const Routine = (props) => {
  return (
    <div className="col-12 bg-info py-2 px-5 mb-5">
      <h1 className="mb-3 text-center">Routine</h1>
      <div className="row">

        <DayIn />
        <DayIn />
        <DayIn />

      </div>
    </div>
  )
}



const DayIn  = () => (
  <div className="col-12 bg-light mb-3 py-2">
    <div className="row justify-content-around">
      <div className="col-12">
        <h3 className="my-2 text-dark text-center">Saturday</h3>
      </div>
      <div className={`col-${2}`}>
        <p className="text-center border">8:45</p>
      </div>
      <div className={`col-${3}`}>
        <p className="text-center border">8:45</p>
      </div>
      <div className={`col-${2}`}>
        <p className="text-center border">9:30</p>
      </div>
      <div className={`col-${2}`}>
        <p className="text-center border">10:15</p>
      </div>
    </div>
  </div>
)

export default Routine
