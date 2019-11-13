import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import HeaderWithNav from '../components/HeaderWithNav'
import Body from '../components/routines/Body'
import InfoContextProvider from '../store/InfoContext'

const Routines = (props) => {
  return (
    <CoreLayout>
      <HeaderWithNav />
      <InfoContextProvider>
        <Body />
      </InfoContextProvider>
    </CoreLayout>
  )
}

export default Routines
