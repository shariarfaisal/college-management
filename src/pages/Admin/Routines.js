import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/routines/Body'
import InfoContextProvider from '../../store/InfoContext'

const Routines = (props) => {
  return (
    <AdminLayout>
      <div className="col-md-12">
        <InfoContextProvider>
          <Body />
        </InfoContextProvider>
      </div>
    </AdminLayout>
  )
}

export default Routines
