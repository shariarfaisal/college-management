import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'
import { periodsQuery } from './query'

const CreatePeriod = (props) => {
  const [time,setTime] = useState('')
  const [startedAt,setStartedAt] = useState('')
  const [endAt,setEndAt] = useState('')
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
          setTime('');setStartedAt('');setEndAt('');
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
      {success && <CloseAlert type="success">{success}</CloseAlert>}
      {error && <CloseAlert type="danger">{error}</CloseAlert>}
      <form onSubmit={submitHandler} className="d-flex justify-content-center ">
        <Input value={time} setValue={setTime} plh="Duration"/>
        <Input value={startedAt} setValue={setStartedAt} plh="Star time"/>
        <Input value={endAt} setValue={setEndAt} plh="End time"/>
        <button type="text" className="btn btn-info px-3 mx-3">add</button>
      </form>
    </div>
  )
}

const Input = ({value,setValue,plh}) => (
  <input
    type="text"
    value={value}
    onChange={e => setValue(e.target.value)}
    className="form-control mx-2"
    placeholder={plh}
  />
)

const mutation = gql`
  mutation CreatePeriod($time: Int!,$startedAt: String!,$endAt: String!){
    createPeriod(data:{
      time: $time,
      startedAt: $startedAt,
      endAt: $endAt
    }){
      id
      time
      startedAt
      endAt
    }
  }
`

export default graphql(mutation)(CreatePeriod)
