import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import Header from '../components/Header'
import StudentLoginBody from '../components/register/Body'
import Form from '../components/studentRegister/Form'
import InfoContextProvider from '../store/InfoContext'


const StudentRegister = (props) => {
  return (
    <CoreLayout>
      <Header />
      <StudentLoginBody>
        <InfoContextProvider>
          <Form />
        </InfoContextProvider>
      </StudentLoginBody>
    </CoreLayout>
  )
}

export default StudentRegister
