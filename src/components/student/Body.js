import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Info from './Info'
import Report from './Report'

const query = gql`
  query Student($id: ID!){
    student(id: $id){
      id name roll reg department{ id name } semester{ id name } shift email phone address session{ id year }
      bookLists{ id probidan books{ id name code }}
    }
  }
`


const Body = ({ id }) => {
  const { data, error } = useQuery(query,{ variables: { id } })
  return (
    <div className="row">
      {data && <Info {...data.student}/>}
      {data && data.student.bookLists.length !== 0 && <Report {...data.student}/>}
      {error && <div className="jumbotron text-center col-10 mx-auto mt-5"><h1>Not found</h1></div>}
    </div>
  )
}

export default Body
