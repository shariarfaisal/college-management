import React from 'react'
import CoreLayout from '../../layouts/CoreLayout'
import AdminLayout from '../../layouts/AdminLayout'
import HeaderWithNav from '../../components/HeaderWithNav'
import Body from '../../components/home/Body'
import InfoContextProvider from '../../store/InfoContext'

// const Home = (props) => {
//   return (
//     <InfoContextProvider>
//       <CoreLayout>
//         <HeaderWithNav />
//         <Body />
//       </CoreLayout>
//     </InfoContextProvider>
//   )
// }

const Home = () => {
  return (
    <AdminLayout>
      hello world
    </AdminLayout>
  )
}

export default Home
