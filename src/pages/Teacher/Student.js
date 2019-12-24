import React from 'react'
import TeacherLayout from '../../layouts/TeacherLayout'
import Body from '../../components/student/Body'

const Student = ({match}) => {
  return (
    <TeacherLayout>
      <Body id={match.params.id}/>
    </TeacherLayout>
  )
}

export default Student
