import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'

const CreateClass = ({ classId, mutate }) => {
  const [date,setDate] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(date){
      try{
        const { data } = await mutate({
          variables:{ class: classId, date }
        })
        if(data){
          setError("");
          setSuccess("Today's Class Created!");
          setDate("")
        }
      }catch(err){
        setSuccess('')
        setError(err.message)
      }
    }
  }

  return (
    <div className="col-12 my-2 py-2" style={{background: 'rgba(200,201,202,.09)'}}>
      {success && <CloseAlert type="success">{success}</CloseAlert>}
      {error && <CloseAlert type="danger">{error}</CloseAlert>}
      <form onSubmit={submitHandler} className="d-flex align-items-center">
          <input
            type="text"
            className="form-control m-2"
            value={date}
            onChange={e => setDate(e.target.value)}
            placeholder="01-01-2019"
          />
        <button className="btn btn-info m-2">create</button>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateAttendenceClass($class: ID!,$date: String!){
    createAttendenceClass(data:{
      class: $class,
      date: $date
    }){
      id
    }
  }
`

export default graphql(mutation)(CreateClass)
