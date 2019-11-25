import React,{ memo, useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'
import { sessionQuery } from '../queries'

const AddSession = (props) => {
  const [year,setYear] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const {data} = await props.mutate({
        variables:{ year },
        refetchQueries: [{ query: sessionQuery }]
      })
      if(data.createSession){
        setYear('')
        setSuccess(`New Session ${data.createSession.year} created successfully!`)
        setError('')
      }
    } catch (e) {
      setError("Session already exists!")
      setSuccess('')
    }
  }


  return (
    <div>
    {success && <CloseAlert type="success">{success}</CloseAlert>}
    {error && <CloseAlert type="danger">{error}</CloseAlert>}
      <form className="row justify-content-around" onSubmit={submitHandler}>
        <input
          className="form-control col-xl-8 my-2"
          type="text"
          value={year}
          onChange={e => setYear(e.target.value)}
          placeholder="Add Session..."
        />
        <button className="btn btn-info px-3 my-2 col-sm-6 col-xl-3">Add</button>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateSession($year: String!){
    createSession(data:{
      year: $year
    }){
      id
      year
    }
  }
`

export default graphql(mutation)(memo(AddSession))
