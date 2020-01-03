import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/notice/Notice'

const Notice = ({ match }) => {
  return (
    <AdminLayout>
      <div className="col-10 mx-auto">
        <Body id={match.params.id} />
      </div>
    </AdminLayout>
  )
}

export default Notice
