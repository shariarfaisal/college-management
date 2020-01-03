<<<<<<< HEAD
import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Students from './Students'
import ClassSection from '../classes/ClassSection'


const query = gql`
  query AttendenceClass($id: ID!){
    attendenceClass(id: $id){
      id day{ id date }
      attendences{
        id student{ id name roll } present
      }
      class{
        id
        period{ id startedAt endAt} subject{ id name code }
        semester{ id name }
        department{ id name }
        day{ id routine{ id shift session{ id year}}}
      }
    }
  }
`



const Attendence = ({ classId }) => {
=======
import React,{ Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import Students from './Students'
import ClassSection from '../classes/ClassSection'
import query from './query'
import Heading from './Heading'


const Index = ({ classId }) => {
>>>>>>> pro
  const {data} = useQuery(query,{
    variables: { id: classId }
  })
  const att = data ? data.attendenceClass.class : null
  return (
    <div className="row">
<<<<<<< HEAD
      {
        data && <ClassSection cls={att}/>
      }
      <div className="col-12 py-3 my-2 text-center text-dark">
        <h4>Attendence</h4>
        {data && <p>{data.attendenceClass.day.date}</p>}
      </div>
      {
        data && <Students
                  department={att.department.id}
                  semester={att.semester.id}
                  shift={att.day.routine.shift}
                  session={att.day.routine.session.id}
                  attendences={data.attendenceClass.attendences}
                  classId={classId}
                />
      }
=======
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
>>>>>>> pro
    </div>
  )
}

<<<<<<< HEAD
export default Attendence
=======
export default Index
>>>>>>> pro
