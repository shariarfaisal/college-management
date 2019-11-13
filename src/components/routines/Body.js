import React,{ useContext } from 'react'
import CreateRoutine from './CreateRoutine'
import {InfoContext} from '../../store/InfoContext'
import { Link } from 'react-router-dom'


const Body = (props) => {
  const info = useContext(InfoContext)

  return (
    <div className="py-4" style={{maxWidth: "100%",background: "#E9ECEF",minHeight: "80vh"}}>
      <div className="row justify-content-center mx-auto " style={{maxWidth: "99%"}}>
        {info.departments && <CreateRoutine info={info}/>}
        <div className="col-md-10">
          <h3 className="my-4 text-center">Routines</h3>
          {info.semesters && info.semesters.map((sem,i) => {
            return (
              <div key={i} className="row justify-content-center">
                {
                  sem.routines.map((r,i) => (
                    <div key={i} className="col-md-3 bg-light border rounded m-1">
                      <p className="py-3 text-center m-0"><Link to={`routines/${r.id}`} className="text-dark">{r.title}</Link></p>
                    </div>
                  ))
                }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Body
