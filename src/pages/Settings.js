import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import HeaderWithNav from '../components/HeaderWithNav'
// import { gql } from 'apollo-boost'
// import { graphql } from 'react-apollo'
import Body from '../components/settings/Body'
import InfoContextProvider from '../store/InfoContext'

const Settings = (props) => {
  return (
    <CoreLayout>
      <InfoContextProvider>
        <HeaderWithNav />
        <Body />
      </InfoContextProvider>
    </CoreLayout>
  )
}

export default Settings
