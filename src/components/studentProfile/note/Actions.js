import React from 'react'
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import { deleteNote } from './mutations'
import { withRouter } from 'react-router-dom'
import query from '../notes/notesQuery'

const [first,orderBy,skip] = [20,'id_DESC',0]

function Actions({ id, isUpdate, setIsUpdate, mutate,history }) {
  const onDeleteHandler = async (e) => {
    const req = window.confirm('Are you sure you want to delete this note?')
    if(req){
      const { data } = await mutate({
        variables: { id },
        refetchQueries: [{ query,variables:{ query: '', first, orderBy, skip } }]
      })
      if(data){
        history.push('/notes')
      }
    }
  }

  return(
    <Styling id="actions" className="clone dropdown dropleft">
      <div id="dropdownMenuButton" data-toggle="dropdown">:</div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div onClick={e => setIsUpdate(!isUpdate)} className="dropdown-item text-info" >edit</div>
        <div onClick={onDeleteHandler} className="dropdown-item text-danger" >delete</div>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  position: absolute;
  color: #363434b8;
  top: 50px;
  right: 3%;
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

export default graphql(deleteNote)(withRouter(Actions))
