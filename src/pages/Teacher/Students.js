import React from 'react'
import TeacherLayout from '../../layouts/TeacherLayout'
import Body from '../../components/students/Body'
import InfoContextProvider from '../../store/InfoContext'
import StudentContextProvider from '../../store/StudentContext'


const Students = (props) => {
  return (
    <InfoContextProvider>
      <TeacherLayout>
        <StudentContextProvider>
          <Body />
        </StudentContextProvider>
      </TeacherLayout>
    </InfoContextProvider>
  )
}

export default Students
