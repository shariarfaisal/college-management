import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/semesters/Body'

const Semesters = () => {
  return (
    <AdminLayout>
      <div className="col-md-8 mx-auto mt-4">
        <Body />
      </div>
    </AdminLayout>
  )
}

export default Semesters
