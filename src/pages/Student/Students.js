import React,{ useContext } from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import Body from '../../components/students/Body'
import InfoContextProvider from '../../store/InfoContext'
import StudentContextProvider from '../../store/StudentContext'

const Students = (props) => {
  return (
    <InfoContextProvider>
      <StudentLayout>
        <StudentContextProvider>
          <Body />
        </StudentContextProvider>
      </StudentLayout>
    </InfoContextProvider>
  )
}

export default Students
