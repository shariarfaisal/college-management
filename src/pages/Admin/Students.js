import React from 'react'
// import PropTypes from 'prop-types'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/students/Body'
import InfoContextProvider from '../../store/InfoContext'
import StudentContextProvider from '../../store/StudentContext'

const Students = (props) => {
  return (
    <InfoContextProvider>
      <AdminLayout>
        <div className="col-xl-10 mx-auto">
          <StudentContextProvider>
            <Body />
          </StudentContextProvider>
        </div>
      </AdminLayout>
    </InfoContextProvider>
  )
}

export default Students
