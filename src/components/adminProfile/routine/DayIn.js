import React,{ memo } from 'react'
import Day from './Day'

const DayIn = ({id,day,classes,dayValue,routineId}) => {
  return (
    <div className="col-12 bg-light mb-3 py-2">
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 className="my-2 text-dark text-center">{day}</h3>
        </div>
        {classes.map((c,i) => <Day key={i} {...c}/>)}
      </div>
    </div>
  )
}

export default memo(DayIn)
