import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/attendences/Body'

const Attendences = () => {
  return (
    <AdminLayout>
      <div className="col-xl-10 mx-auto">
        <Body />
      </div>
    </AdminLayout>
  )
}

export default Attendences
