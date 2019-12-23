import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import RoutineInfo from './RoutineInfo'
import DayIn from './DayIn'
import AddDays from './AddDays'
import query from './query'
import CreatePeriod from './CreatePeriod'
import AddClass from './AddClass'


const Body = (props) => {
  const { data } = useQuery(query,{
    variables: { id: props.id }
  })
  return (
    <Styles className="">
      {data && <RoutineInfo routine={data.routine}/>}
      {data && data.routine.days.length !== 7 && <AddDays id={data.routine.id} days={data.routine.days}/>}
      <CreatePeriod />
      {data && <AddClass routine={data.routine} />}
      <div className="row">
        {data && data.routine.days.map((d,i) => {
          return <DayIn key={i} {...d} routineId={props.id}/>
        })}
      </div>
    </Styles>
  )
}



const Styles = styled.div`
  width: 100%;

`

export default Body
