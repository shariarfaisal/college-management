import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
  query Teacher($id: ID!){
    teacher(id: $id){
      id name email address position phone
    }
  }
`


function Teacher({ id }) {
  const { data, error } = useQuery(query,{
    variables:{ id }
  })


  return(
    <div>
      {data && <div className="jumbotron">
        <h1 className="my-4">About</h1>
        <p><strong>Name: </strong>{data.teacher.name}</p>
        <p><strong>Email: </strong>{data.teacher.email}</p>
        <p><strong>Address: </strong>{data.teacher.address}</p>
        <p><strong>Position: </strong>{data.teacher.position}</p>
        <p><strong>Phone: </strong>{data.teacher.phone}</p>
      </div>}
      {error && <div>Not Found</div>}
    </div>
  )
}
export default Teacher
