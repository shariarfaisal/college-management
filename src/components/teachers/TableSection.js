import React from 'react'
import Thead from './Thead'
import TableRow from './TableRow'

const filter = (data,search) => {
  if(search){
    return data.filter(i => {
      return i.name.match(new RegExp(search,'i'))
    })
  }else{
    return data
  }
}

const Table = ({teachers,setSkip,skip,search}) => {
  return (
    <div className="col-md-12" >
      <table className="table">
        <Thead />
        <tbody>
          {filter(teachers,search).map((s,i) => {
            return <TableRow key={i} {...s} i={i}/>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
