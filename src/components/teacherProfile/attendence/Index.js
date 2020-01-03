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
  const {data} = useQuery(query,{
    variables: { id: classId }
  })
  const att = data ? data.attendenceClass.class : null
  return (
    <div className="row">
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
    </div>
  )
}

export default Attendence
