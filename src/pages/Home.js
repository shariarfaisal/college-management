import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import HeaderWithNav from '../components/HeaderWithNav'
// import { gql } from 'apollo-boost'
// import { graphql } from 'react-apollo'
import Body from '../components/home/Body'
import InfoContextProvider from '../store/InfoContext'

const Home = (props) => {
  return (
    <InfoContextProvider>
      <CoreLayout>
        <HeaderWithNav />
        <Body />
      </CoreLayout>
    </InfoContextProvider>
  )
}

export default Home
