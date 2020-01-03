import React,{ useState, memo } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import { periodsQuery } from './query'
import { createPeriod } from './mutations'
import useInput from '../../hooks/useInput'

const CreatePeriod = (props) => {
  const [time,bindTime,resetTime] = useInput('')
  const [startedAt,bindStartedAt,resetStartedAt] = useInput('')
  const [endAt,bindEndAt,resetEndAt] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(time && startedAt && endAt){
      try{
        const { data } = await props.mutate({
          variables: { time: Number(time), startedAt, endAt },
          refetchQueries: [{ query: periodsQuery }]
        })
        if(data){
          resetTime();resetStartedAt();resetEndAt();
          setSuccess(`New time period created ${data.createPeriod.startedAt} to ${data.createPeriod.endAt}`)
        }
      }catch(err){
        setError(err.message.replace('GraphQL error: ',''))
      }
    }
  }


  return (
    <div title="Create period" className="my-3 py-3 px-2" style={{background: "rgba(184, 192, 199, 0.32)"}}>
      <p className="text-center">Create period</p>
      <Alert success={success} error={error} />
      <form onSubmit={submitHandler} className="d-flex justify-content-center ">
        <input {...bindTime} className="form-control mx-2" placeholder="Duration"/>
        <input {...bindStartedAt} className="form-control mx-2" placeholder="Star time"/>
        <input {...bindEndAt} className="form-control mx-2" placeholder="End time"/>
        <button type="text" className="btn btn-info px-3 mx-3">add</button>
      </form>
    </div>
  )
}


export default graphql(createPeriod)(memo(CreatePeriod))
