import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import HeaderWithNav from '../components/HeaderWithNav'
import TeacherRegisterBody from '../components/register/Body'
import Form from '../components/teacherRegister/Form'


const TeacherRegister = (props) => {
  return (
    <CoreLayout>
      <HeaderWithNav />
      <TeacherRegisterBody>
        <Form />
      </TeacherRegisterBody>
    </CoreLayout>
  )
}

export default TeacherRegister
