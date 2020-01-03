import React,{ useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GET_DATA as query } from '../../store/StudentContext'

const deleteStudent = gql`
  mutation DeleteStudent($id: ID!){
    deleteStudent(id: $id){
      id
    }
  }
`

function DeleteAccount(props) {
  const [is,setIs] = useState(false)
  const [name,bindName] = useInput()
  const [roll,bindRoll] = useInput()

  const [getDelete,{ data,error }] = useMutation(deleteStudent,{
    variables:{ id: props.id },
    refetchQueries:[{ query,variables: { first: 20, skip: 0,orderBy: "roll_ASC"} }]
  })

  if(data) props.history.goBack()

  const submitHandler = e => {
    e.preventDefault()
    if(name && roll && name === props.name && roll === props.roll){
      getDelete()
    }
  }

  return(
    <Styling>
      <strong onClick={e => setIs(true)} className="text-danger mt-5">Delete account</strong>
      {is && <form onSubmit={submitHandler} className="row justify-content-around">
        <div className="wrapper col-lg-9 col-xl-8">
          <div className="d-flex">
            <input {...bindName} placeholder="Fullname ..." className="form-control  col-7" />
            <input {...bindRoll} placeholder="Roll ..." className="form-control mx-2 col-4" />
          </div>
          <div className="d-flex mt-3">
            <button onClick={e => setIs(false)} type="button" className="btn btn-sm btn-info">cancel</button>
            <button type="submit" className="btn btn-sm btn-danger ml-2">Submit</button>
          </div>
        </div>
        <div className="col-lg-2 col-xl-3 text-danger warn">
          <small><strong>Warning!</strong> Will be delete all about this user!</small>
        </div>
      </form>}
    </Styling>
  )
}

const Styling = styled.div`
  .wrapper{
    padding: 15px 20px;
    background: #ffffffba;
    border-radius: 5px;
    margin-top: 20px;
  }
  .warn{
    padding: 15px 20px;
    background: #ffffffba;
    border-radius: 5px;
    margin-top: 20px;
  }
  strong{
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`
export default withRouter(DeleteAccount)
