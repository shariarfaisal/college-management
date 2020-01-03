import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import DayIn from '../../adminProfile/routine/DayIn'
import query from './query'

const Routine = ({ department, semester, session, shift }) => {
  const { data } = useQuery(query,{
    variables: { department, semester, session, shift }
  })

  return (
    <div className="row">
      {data && data.routines[0].days.map((d,i) => {
        return <DayIn key={i} {...d}/>
      })}
    </div>
  )
}

export default Routine
