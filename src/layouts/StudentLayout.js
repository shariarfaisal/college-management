import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import CoreLayout from './CoreLayout'
import HeaderWithNav from '../components/HeaderWithNav'
import Body from '../components/student/Body'

const query = gql`
  query Student($id: ID!){
    student(id: $id){
      id
      name
      email
      roll
      reg
      address
      shift
      phone
      session{ id year }
      department{ id name }
      semester{ id name }
    }
  }
`

const StudentLayout = ({ match, children }) => {
  const { data } = useQuery(query,{variables:{ id: match.params.id }})

  return (
    <CoreLayout>
      <HeaderWithNav />
      { data && <Body student={data.student}>
        {children}
      </Body>}
    </CoreLayout>
  )
}

export default StudentLayout
