import React from 'react'
import { Link } from 'react-router-dom'

const des = a => a === 45 ? 3 : 4
const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']

const ClassSection = ({period,day,subject,department,semester,id}) => {
  const ab = days.findIndex(i => i === day.day) === new Date().getDay()
  return (
    <div className={`col-${des(period.time)} border py-2 text-muted text-center m-1`} style={{background: ab?'#add8e687':'rgba(222, 226, 230, 0.32)'}}>
      <p className="m-0">{`${period.startedAt}-${period.endAt}`}</p>
      <p className="m-0"><strong>Sub: </strong>{`${subject.name} (${subject.code})`}</p>
      <p className="m-0"><strong>Dep: </strong>{department.name}</p>
      <p className="m-0"><strong>Semester: </strong>{semester.name}</p>
      <Link to={`classes/${id}`}>classes</Link>
    </div>
  )
}

export default ClassSection
