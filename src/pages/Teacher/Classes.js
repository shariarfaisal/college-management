import React from 'react'
import TeacherLayout from '../../layouts/TeacherLayout'
import Body from '../../components/teacherProfile/classes/Body'

const Classes = ({match}) => {
  return (
    <TeacherLayout>
      <Body classId={match.params.id}/>
    </TeacherLayout>
  )
}

export default Classes
