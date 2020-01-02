import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import ClassSection from './ClassSection'

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
        {cls.map((c,i) => <ClassSection key={i} {...c} />)}
      </div>
    </div>
  )
}

export default Day
