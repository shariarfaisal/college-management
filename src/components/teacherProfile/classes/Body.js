import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import ClassSection from './ClassSection'
import CreateClass from './CreateClass'
import Classes from './Classes'
import query from './query'

// const today = () => {
//   const i = new Date()
//   return `${i.getDate()>9 ? i.getDate() : '0'+i.getDate()}-${i.getMonth()+1}-${i.getFullYear()}`
// }


const Body = ({ classId }) => {
  const { data } = useQuery(query,{
    variables: { id: classId }
  })

  return (
    <div className="row">
      {data && <ClassSection cls={data.class}/>}
      <CreateClass  classId={classId}/>
      {data && <Classes classes={data.class.attendenceClasses}/>}
    </div>
  )
}


export default Body
