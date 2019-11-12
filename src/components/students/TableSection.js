import React from 'react'
import Thead from './Thead'
import TableRow from './TableRow'


const Table = ({students,setSkip,skip}) => {
  return (
    <div className="col-md-10 col-lg-8" >
      <table className="table">
        <Thead />
        <tbody>
          {students.map((s,i) => {
            return <TableRow key={i} {...s}/>
          })}
        </tbody>
      </table>
      <div className="text-center">
        {
          students.length > 9 && <button onClick={e => setSkip(skip+10)} className="btn btn-light mx-auto rounded-circle py-4 px-3" style={{fontWeight: "bold"}}>more</button>
        }
      </div>
    </div>
  )
}

export default Table
