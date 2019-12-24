import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ClassSection from './ClassSection'
import CreateClass from './CreateClass'
import Classes from './Classes'
import query from './query'


const Body = ({ classId }) => {
  const { data } = useQuery(query,{
    variables: { id: classId }
  })

  return (
    <div className="row">
      {data && <ClassSection cls={data.class}/>}
      {data && <CreateClass  classId={classId} day={data.class.day}/>}
      {data && <Classes classes={data.class.attendenceClasses} classId={classId}/>}
    </div>
  )
}


export default Body
