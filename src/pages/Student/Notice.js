import React from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import Body from '../../components/adminProfile/notice/Notice'

const Notice = ({match}) => {
  return (
    <StudentLayout>
      <Body id={match.params.id} />
    </StudentLayout>
  )
}

export default Notice
