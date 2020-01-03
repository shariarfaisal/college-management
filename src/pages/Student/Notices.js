import React from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import NoticesSection from '../../components/adminProfile/notices/Notices'

const Home = (props) => {
  return (
    <StudentLayout>
      <NoticesSection />
    </StudentLayout>
  )
}

export default Home
