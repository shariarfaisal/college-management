import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/semesters/Body'

const Semesters = () => {
  return (
    <AdminLayout>
      <div className="col-md-6">
        <Body />
      </div>
    </AdminLayout>
  )
}

export default Semesters
