import React from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import Body from '../../components/studentProfile/Activity'
import Attendences from '../../components/studentProfile/attendences/Body'

const Activity = (props) => {
  return (
    <StudentLayout>
      <Body />
      <Attendences />
    </StudentLayout>
  )
}

export default Activity
