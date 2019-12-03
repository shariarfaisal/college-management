import React,{ useState } from 'react'
import {Link} from 'react-router-dom'

const MonthlyDays = ({m,days}) => {
  const [open,setOpen] = useState(false)
  return (
    <div className="col-12 m-2" style={{background: 'rgba(200,201,202,.9)',transition: '.4s ease all'}}>
      <h5 style={{cursor: 'pointer'}} onClick={e => setOpen(!open)} className="text-center my-2" data-toggle="collapse" data-target={`#month-${m}`}>{m}<div className="badge badge-primary mx-3">{days.length}</div></h5>
      <div className="list-group pb-3 collapse" id={`month-${m}`}>
        {
          days.map((d,i) => (
            <Link key={i} className="list-group-item list-group-item-action" to={`/attendence/${d.id}`}>{d.date}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default MonthlyDays
