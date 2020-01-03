import React from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import Body from '../../components/teachers/Teacher'


const Teacher = ({ match }) => {
  return (
    <StudentLayout>
      <Body id={match.params.id} />
    </StudentLayout>
  )
}

export default Teacher
