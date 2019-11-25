import React from 'react'
import  CoreLayout from './CoreLayout'
import Header from '../components/Header'
import Body from '../components/adminProfile/Body'

const AdminLayout = ({children}) => {
  return (
      <CoreLayout>
        <Header />
        <Body>
          {children}
        </Body>
      </CoreLayout>
  )
}

export default AdminLayout
