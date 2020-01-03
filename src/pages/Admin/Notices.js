import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/notices/Body'

const Notices = () => {
  return (
    <AdminLayout>
      <div className="col-xl-10 mx-auto">
        <Body />
      </div>
    </AdminLayout>
  )
}

export default Notices
