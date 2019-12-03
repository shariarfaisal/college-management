import React from 'react'
import MonthlyDays from './MonthlyDays'
import months from './months'

const filter = (data) => {
  return data.reduce((a,b) => {
    const date = b.date.split('-')[1]
    a[date-1].days.push(b)
    return a
  },months)
}

const Days = ({days}) => {
  return (
    <div className="py-3 my-3 col-12">
      <div className="row justify-content-center">
        {
          filter(days).map((d,i) => <MonthlyDays key={i} {...d} />)
        }
      </div>
    </div>
  )
}

export default Days
