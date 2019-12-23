import React from 'react'

const ClassSection = ({ cls }) => {
  const { semester, department, period, subject } = cls
  return (
    <div className="col-12 my-3 py-2 text-center text-muted">
      <h4>{`${subject.name} (${subject.code})`}</h4>
      <p>{`${period.startedAt} - ${period.endAt}`}</p>
    </div>
  )
}

export default ClassSection
