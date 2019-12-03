import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/departments/Body'
import RightSection from '../../components/adminProfile/RightSection'
import Semesters from '../../components/adminProfile/semesters/Body'
import Sessions from '../../components/adminProfile/sessions/Body'


const Departments = (props) => {
  return (
    <AdminLayout>
      <div className="col-md-8 " id="content-section">
        <Body />
      </div>
      <RightSection>
        <Semesters />
        <Sessions />
      </RightSection>
    </AdminLayout>
  )
}

export default Departments
