import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/bookList/Body'
import InfoContextProvider from '../../store/InfoContext'

const BookList = (props) => {
  return (
    <InfoContextProvider>
      <AdminLayout>
        <Body />
      </AdminLayout>
    </InfoContextProvider>
  )
}

export default BookList
