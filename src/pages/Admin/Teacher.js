import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/teachers/Teacher'

const Teacher = ({ match }) => {
  return (
    <AdminLayout>
      <div className="col-xl-10 mx-auto mt-4">
        <Body id={match.params.id} />
      </div>
    </AdminLayout>
  )
}

export default Teacher
