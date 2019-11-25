import React from 'react'
import Thead from './Thead'
import TableRow from './TableRow'


const Table = ({teachers,setSkip,skip}) => {
  return (
    <div className="col-md-10 col-lg-8" >
      <h3 className="my-3 text-center">Teachers</h3>
      <table className="table">
        <Thead />
        <tbody>
          {teachers.map((s,i) => {
            return <TableRow key={i} {...s} i={i}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
