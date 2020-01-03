import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/student/Body'

const Student = ({match}) => {
  return (
    <AdminLayout>
      <div className="col-10 mx-auto">
        <Body id={match.params.id}/>
      </div>
    </AdminLayout>
  )
}

export default Student
