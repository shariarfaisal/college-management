import React from 'react'

const Classes = ({classes}) => {
  return (
    <div className="py-3 my-2 col-12" >
      <div className="row">
      {
        classes.map((c,i) => (
          <div key={i} className="col-sm-6 col-md-4 m-2 py-3 text-center rounded" style={{background: "rgba(200,201,202,.9)"}}>
            <p className="m-0">{c.day.date}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Classes
