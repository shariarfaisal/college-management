import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import HeaderWithNav from '../components/HeaderWithNav'
import StudentLoginBody from '../components/register/Body'
import Form from '../components/studentRegister/Form'
import InfoContextProvider from '../store/InfoContext'


const StudentRegister = (props) => {
  return (
    <CoreLayout>
      <HeaderWithNav />
      <StudentLoginBody>
        <InfoContextProvider>
          <Form />
        </InfoContextProvider>
      </StudentLoginBody>
    </CoreLayout>
  )
}

export default StudentRegister
