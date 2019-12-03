import React from 'react'

const des = a => {
  return a === 45 ? 2 : 3
}

const DayIn = ({id,day,classes,dayValue}) => {
  return (
    <div className="col-12 bg-light mb-3 py-2">
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 className="my-2 text-dark text-center">{day}</h3>
        </div>
        {
          classes.map((c,i) => (
            <div key={i} className={`col-${des(c.period.time)} border py-2 text-muted text-center m-1`} style={{background: "rgba(222, 226, 230, 0.32)"}}>
              <p className="m-0">{`${c.period.startedAt}-${c.period.endAt}`}</p>
              <p className="m-0"><strong>Sub: </strong>{`${c.subject.name} (${c.subject.code})`}</p>
              <p className="m-0"><strong>Mentor: </strong>{c.mentor.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DayIn
