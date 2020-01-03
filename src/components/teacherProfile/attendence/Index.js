import React,{ Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Students from './Students'
import ClassSection from '../classes/ClassSection'
import query from './query'
import Heading from './Heading'


const Index = ({ classId }) => {
  const {data} = useQuery(query,{
    variables: { id: classId }
  })
  const att = data ? data.attendenceClass.class : null
  return (
    <div className="row">
      {data && <Fragment>
        <ClassSection cls={att}/>
        <Heading date={data.attendenceClass.day.date}/>
        <Students
          department={att.department.id}
          semester={att.semester.id}
          shift={att.day.routine.shift}
          session={att.day.routine.session.id}
          attendences={data.attendenceClass.attendences}
          classId={classId}
        />
      </Fragment>}
    </div>
  )
}

export default Index
