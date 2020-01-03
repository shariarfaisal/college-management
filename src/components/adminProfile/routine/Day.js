import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import query from './query'
import DayAction from './DayAction'
import { deleteClass } from './mutations'
import { admin } from '../../users'

const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']
const des = a => a === 45 ? 2 : 3


const Day = ({id,day,period,subject,mentor}) => {
  const ab = days.findIndex(i => i === day.day) === new Date().getDay()

  const [getDelete,{ data }] = useMutation(deleteClass,{
    variables:{ id },
    refetchQueries:[{ query,variables:{ id }}]
  })

  const onDeleteHandler = (e) => {
    const confirm = window.confirm('Are you sure you want to delete this class?')
    if(confirm && admin){
      getDelete()
    }
  }

  return (
    <div style={{position: 'relative'}} className={`col-${des(period.time)} border py-2 text-muted text-center m-1 ac-parent`} style={{background: ab?'#add8e687':'rgba(222, 226, 230, 0.32)'}}>
      <p className="m-0">{`${period.startedAt}-${period.endAt}`}</p>
      <p className="m-0"><strong>Sub: </strong>{`${subject.name} (${subject.code})`}</p>
      <p className="m-0"><strong>Mentor: </strong>{mentor.name}</p>
      {admin && <DayAction onDeleteHandler={onDeleteHandler}/>}
    </div>
  )
}

export default Day
