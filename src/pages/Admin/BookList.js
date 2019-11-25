import React from 'react'
import CoreLayout from '../../layouts/CoreLayout'
import HeaderWithNav from '../../components/HeaderWithNav'
import Body from '../../components/bookList/Body'
import InfoContextProvider from '../../store/InfoContext'

const BookList = (props) => {
  return (
    <InfoContextProvider>
      <CoreLayout>
        <HeaderWithNav />
        <Body />
      </CoreLayout>
    </InfoContextProvider>
  )
}

export default BookList
