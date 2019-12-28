import React,{ Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { attendenceDay } from './query'
import Classes from './Classes'
import Header from './Header'

const sortData = (data) => {
  return data.reduce((a,b) => {
    const dn = b.class.department.name
    if(!a[dn]){
      a[dn] = []
    }
    a[dn].push(b)
    return a
  },{})
}


const Body = ({ id }) => {
  const { data } = useQuery(attendenceDay,{ variables: { id } })
  let result = {}
  if(data){
    result = sortData(data.attendenceDay.classes)
  }

  return (
    <div className="col-12">
      {data &&
        <Fragment>
          <Header date={data.attendenceDay.date}/>
          {Object.keys(result).map((item,i) => <Classes key={i} item={item} result={result} />)}
        </Fragment>}
    </div>
  )
}


export default Body
