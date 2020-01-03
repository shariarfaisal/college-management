import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/about/Body'

const About = (props) => {
  return (
    <AdminLayout>
      <div className="col-xl-10 mx-auto">
        <Body />
      </div>
    </AdminLayout>
  )
}

export default About
