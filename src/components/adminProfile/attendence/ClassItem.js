import React from 'react'

const ClassItem = ({class:cls,attendences}) => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body text-center">
          <p className="m-0"><strong>Semester: </strong>{cls.semester.name}</p>
          <p className="m-0"><strong>Subject: </strong>{cls.subject.name} ({cls.subject.code})</p>
          <p className="m-0"><strong>Mentor: </strong> {cls.mentor.name}</p>
        </div>
        <div className="card-footer d-flex">
          <small className="m-0 text-muted">{cls.period.startedAt} - {cls.period.endAt}</small>
          <small className="m-0 text-muted ml-auto">{cls.day.day}</small>
        </div>
      </div>
    </div>
  )
}

export default ClassItem
