import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/student/Body'

const Student = ({match}) => {
  return (
    <AdminLayout>
      <Body id={match.params.id}/>
    </AdminLayout>
  )
}

export default Student
