import React,{ Fragment } from 'react'
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
      {data && <Fragment>
        <ClassSection cls={data.class}/>
        <CreateClass  classId={classId} day={data.class.day}/>
        <Classes classes={data.class.attendenceClasses} classId={classId}/>
      </Fragment>}
    </div>
  )
}


export default Body
