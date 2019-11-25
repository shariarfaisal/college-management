import React from 'react'
import CoreLayout from './CoreLayout'
import Header from '../components/Header'
import Body from '../components/teacherProfile/Body'
import TeacherMeContextProvider from '../store/TeacherMeContext'


const TeacherLayout = ({children}) => {
  return (
    <TeacherMeContextProvider>
      <CoreLayout>
        <Header />
        <Body>
          {children}
        </Body>
      </CoreLayout>
    </TeacherMeContextProvider>
  )
}

export default TeacherLayout
