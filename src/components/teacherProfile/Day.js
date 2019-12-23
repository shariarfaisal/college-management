import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

const des = a => {
  return a === 45 ? 3 : 4
}

const filter = (data) => {
  return data.reduce((a,b) => {
    const exists = a.find(i => i.id === b.id)
    if(!exists){
      a.push(b)
    }
    return a
  },[])
}

const Day = ({id,day,classes}) => {
  const [cls,setCls] = useState(filter(classes))
  return (
    <div className="col-12 bg-light mb-3 py-2">
      <div className="row justify-content-center">
        <h3 className="col-12 my-2 text-dark text-center">{day}</h3>
        {
          cls.map((c,i) => (
            <div key={i} className={`col-${des(c.period.time)} border py-2 text-muted text-center m-1`} style={{background: "rgba(222, 226, 230, 0.32)"}}>
              <p className="m-0">{`${c.period.startedAt}-${c.period.endAt}`}</p>
              <p className="m-0"><strong>Sub: </strong>{`${c.subject.name} (${c.subject.code})`}</p>
              <p className="m-0"><strong>Dep: </strong>{c.department.name}</p>
              <p className="m-0"><strong>Semester: </strong>{c.semester.name}</p>
              <Link to={`classes/${c.id}`}>classes</Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Day
