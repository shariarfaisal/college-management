import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Student from './Student'
import { studentsQuery } from './query'
import Thead from './Thead'
import filter from './filter'

const Students = ({department,semester,shift,session,attendences,classId}) => {
  const { data } = useQuery(studentsQuery,{
    variables: { department, semester, shift,session,orderBy: 'roll_ASC' }
  })

  return (
    <div className="col-12 my-3">
      <table className="table">
        <Thead />
        <tbody>
        {data && filter(data.students,attendences).map((st,i) => <Student key={i} {...st} classId={classId}/>)}
        </tbody>
      </table>
    </div>
  )
}

export default Students
