import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import Header from '../components/Header'
import TeacherRegisterBody from '../components/register/Body'
import Form from '../components/teacherRegister/Form'


const TeacherRegister = (props) => {
  return (
    <CoreLayout>
      <Header />
      <TeacherRegisterBody>
        <Form />
      </TeacherRegisterBody>
    </CoreLayout>
  )
}

export default TeacherRegister
