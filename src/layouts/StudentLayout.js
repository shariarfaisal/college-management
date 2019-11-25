import React from 'react'
import CoreLayout from './CoreLayout'
import Body from '../components/studentProfile/Body'
import Header from '../components/Header'
import StudentMeContextProvider from '../store/StudentMeContext'

const StudentLayout = ({ children }) => {
  return (
    <StudentMeContextProvider>
      <CoreLayout>
        <Header />
        <Body>
          {children}
        </Body>
      </CoreLayout>
    </StudentMeContextProvider>
  )
}

export default StudentLayout
