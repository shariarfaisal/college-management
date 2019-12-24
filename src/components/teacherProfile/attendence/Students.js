import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Student from './Student'


const studentsQuery = gql`
  query Students($department: ID,$semester: ID,$shift: String,$session: ID,$orderBy: String){
    students(department: $department,semester: $semester,shift: $shift,session: $session,orderBy: $orderBy){
      id name roll reg
    }
  }
`

const filter = (students,attendences) => {
  return students.map(i => {
    const exists = attendences.find(a => a.student.id === i.id)
    if(exists){
      i.present = exists.present
    }else {
      i.present = null
    }
    return i
  })
}

const Students = ({department,semester,shift,session,attendences,classId}) => {
  const { data } = useQuery(studentsQuery,{
    variables: { department, semester, shift,session,orderBy: 'roll_ASC' }
  })

  return (
    <div className="col-12 my-3">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Roll</th>
            <th scope="col">Name</th>
            <th scope="col">Present</th>
          </tr>
        </thead>
        <tbody>
        {
          data && filter(data.students,attendences).map((st,i) => <Student key={i} {...st} classId={classId}/>)
        }
        </tbody>
      </table>
    </div>
  )
}

export default Students
