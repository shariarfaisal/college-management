import React from 'react'
import AddDay from './AddDay'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Days from './Days'

export const query = gql`
  query{
    attendenceDays{
      id date
    }
  }
`


const Body = (props) => {
  const { data } = useQuery(query)

  return (
    <div className="row justify-content-center">
      <AddDay />
      {data && <Days days={data.attendenceDays}/>}
    </div>
  )
}

export default Body
