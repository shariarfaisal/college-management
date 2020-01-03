import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { deleteNotice } from './mutations'
import query from '../notices/query'
const [first,orderBy,skip,search] = [15,'createdAt_DESC',0,'']

function Actions({ setUpdateMode, id, history }) {
  const [getDelete,{ data ,error }] = useMutation(deleteNotice,{
    variables:{ id },
    refetchQueries:[{ query,variables:{ first, orderBy, skip, query: search } }]
  })
  if(data) history.push('/notices')

  const deleteHandler = e => {
    const res = window.confirm("Are you sure you want to delete this Notice?")
    if(res){
      getDelete()
    }
  }

  return(
    <Styling id="actions" className="clone dropdown dropleft">
      <div id="dropdownMenuButton" data-toggle="dropdown">:</div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div onClick={e => setUpdateMode(true)} className="dropdown-item text-info" >edit</div>
        <div onClick={deleteHandler} className="dropdown-item text-danger" >delete</div>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  position: absolute;
  color: #363434b8;
  top: 30px;
  right: 2%;
  width: 20px;
  height: 30px;
  border-radius: 21%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background: #ececec;
    color: black;
  }
  .dropdown-menu{
    min-width: 100px;
  }
`

export default withRouter(Actions)
