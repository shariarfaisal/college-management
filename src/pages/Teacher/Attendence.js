import React from 'react'
import TeacherLayout from '../../layouts/TeacherLayout'
import Body from '../../components/teacherProfile/attendence/index'

const Attendence = ({match}) => {
  return (
    <TeacherLayout>
      <Body classId={match.params.classId}/>
    </TeacherLayout>
  )
}

export default Attendence
