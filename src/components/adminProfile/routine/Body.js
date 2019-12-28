import React,{ Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
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
    <div style={{width: '100%'}}>
      {data &&
        <Fragment>
          <RoutineInfo routine={data.routine}/>
          {data.routine.days.length !== 7 && <AddDays id={data.routine.id} days={data.routine.days}/>}
          <CreatePeriod />
          <AddClass routine={data.routine} />
          <div className="row">
            {data.routine.days.map((d,i) => <DayIn key={i} {...d} />)}
          </div>
        </Fragment>
      }
    </div>
  )
}


export default Body
