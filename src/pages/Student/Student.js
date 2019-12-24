import React from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import Body from '../../components/student/Body'

const Student = ({match}) => {
  return (
    <StudentLayout>
      <Body id={match.params.id}/>
    </StudentLayout>
  )
}

export default Student
