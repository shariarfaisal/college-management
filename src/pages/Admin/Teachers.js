import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/teachers/Body'

const Teachers = (props) => {
  return (
    <AdminLayout>
      <div className="col-xl-10 mx-auto mt-4">
        <Body />
      </div>
    </AdminLayout>
  )
}

export default Teachers
