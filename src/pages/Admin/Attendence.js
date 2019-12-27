import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/attendence/Body'

const Attendence = ({ match }) => {
  return (
    <AdminLayout>
      <Body id={match.params.id} />
    </AdminLayout>
  )
}

export default Attendence
