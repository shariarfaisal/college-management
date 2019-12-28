import React,{ memo } from 'react'

const SelectDay = ({day,setDay,days}) => {
  return (
    <select onChange={e => setDay(e.target.value)} className="m-2 custom-select" value={day}>
      <option value="">Select Day</option>
      {days.map((d,i) => (
        <option key={i} value={d.id}>{d.day}</option>
      ))}
    </select>
  )
}

export default memo(SelectDay)
