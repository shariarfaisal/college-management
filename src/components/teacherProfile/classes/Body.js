import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import ClassSection from './ClassSection'
import CreateClass from './CreateClass'

const query = gql`
  query Class($id: ID!){
    class(id: $id){
      id day{ id day}  semester{ id name } department{ id name } period{ id startedAt endAt} subject{ id name code }
      attendenceClasses{ id }
    }
  }
`

// const today = () => {
//   const i = new Date()
//   return `${i.getDate()>9 ? i.getDate() : '0'+i.getDate()}-${i.getMonth()+1}-${i.getFullYear()}`
// }


const Body = ({ classId }) => {

  const { data } = useQuery(query,{
    variables: { id: classId }
  })

if(data){
  console.log(data);
}
  return (
    <div className="row">
      {data && <ClassSection {...data.class}/>}
      <CreateClass  classId={classId}/>
    </div>
  )
}


export default Body
