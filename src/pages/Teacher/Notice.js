import React from 'react'
import TeacherLayout from '../../layouts/TeacherLayout'
import Body from '../../components/adminProfile/notice/Notice'


const Notice = ({ match }) => {
  return (
    <TeacherLayout>
      <Body id={match.params.id} />
    </TeacherLayout>
  )
}

export default Notice
