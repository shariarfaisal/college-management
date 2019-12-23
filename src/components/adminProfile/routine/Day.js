import React from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import query from './query'

const deleteQuery = gql`
  mutation DeleteClass($id: ID!){
    deleteClass(id: $id){
      id
    }
  }
`

const des = a => {
  return a === 45 ? 2 : 3
}

const Day = ({id,period,subject,mentor,routineId}) => {
  const [getDelete,{ data }] = useMutation(deleteQuery,{
    variables:{ id },
    refetchQueries:[{ query,variables:{ id: routineId }}]
  })

  const onDeleteHandler = (e) => {
      const confirm = window.confirm('Are you sure you want to delete this class?')
      if(confirm){
        getDelete()
      }
  }

  return (
    <StyleDay className={`col-${des(period.time)} border py-2 text-muted text-center m-1 ac-parent`} style={{background: "rgba(222, 226, 230, 0.32)"}}>
      <p className="m-0">{`${period.startedAt}-${period.endAt}`}</p>
      <p className="m-0"><strong>Sub: </strong>{`${subject.name} (${subject.code})`}</p>
      <p className="m-0"><strong>Mentor: </strong>{mentor.name}</p>
      <div id={`action`} className="d-flex text-right justify-content-end my-auto py-2 bg-dark">
        <p className="text-info mx-2 my-0 px-2">edit</p>
        <p onClick={onDeleteHandler} className="text-danger mx-2 my-0 px-2">delete</p>
      </div>
    </StyleDay>
  )
}

const StyleDay = styled.div`
  position: relative;
  box-shadow: 0px 6px 10px #e9e9e9d1;
  #action{
    position: absolute;
    visibility: hidden;
  }
  &:hover #action{
    visibility: visible;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    font-weight: 600;
    p{
      cursor: pointer;
    }
    p:hover{
      transition: .2s;
      border-radius: 5px;
      border: 1px solid #2c2a2a;
    }
  }
`

export default Day
