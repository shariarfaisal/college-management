import React from 'react'
// import PropTypes from 'prop-types'
import CoreLayout from '../../layouts/CoreLayout'
import HeaderWithNav from '../../components/HeaderWithNav'
import Body from '../../components/students/Body'
import InfoContextProvider from '../../store/InfoContext'
import StudentContextProvider from '../../store/StudentContext'

const Students = (props) => {
  return (
    <InfoContextProvider>
      <CoreLayout>
        <HeaderWithNav />
        <StudentContextProvider>
          <Body />
        </StudentContextProvider>
      </CoreLayout>
    </InfoContextProvider>
  )
}

export default Students
