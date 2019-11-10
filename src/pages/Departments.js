import React from 'react'
import CoreLayout from '../layouts/CoreLayout'
import HeaderWithNav from '../components/HeaderWithNav'
import Department from '../components/departments/Department'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'


const Departments = ({data}) => {
  const deps = data.departments
  return (
    <CoreLayout>
      <HeaderWithNav />
      <div className="content">
        <div className="row justify-content-center p-5" >
          {
            deps && deps.map((dep,i) => <Department key={i} {...dep} />)
          }
        </div>
      </div>
    </CoreLayout>
  )
}

const query = gql`
  query{
    departments{
      id
      name
    }
  }
`

export default graphql(query)(Departments)
