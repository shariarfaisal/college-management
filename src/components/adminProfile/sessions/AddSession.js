import React,{ memo, useState } from 'react'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import { sessionQuery } from '../queries'
import { createSession } from './mutations'

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
      <Alert success={success} error={error} />
      <form className="d-flex justify-content-around" onSubmit={submitHandler}>
        <input
          className="form-control m-2"
          type="text"
          value={year}
          onChange={e => setYear(e.target.value)}
          placeholder="Add Session..."
        />
        <button className="btn btn-info px-3 m-2">Add</button>
      </form>
    </div>
  )
}

export default graphql(createSession)(memo(AddSession))
