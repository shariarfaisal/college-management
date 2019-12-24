import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'
import query from './query'

const today = () => {
  const i = new Date()
  return `${i.getDate()>9 ? i.getDate() : '0'+i.getDate()}-${i.getMonth()+1}-${i.getFullYear()}`
}

const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','SATURDAY']

const CreateClass = ({ classId, day, mutate }) => {
  const [date,setDate] = useState(today())
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const isToday = days.findIndex(i => i === day.day) === new Date().getDay()

  const submitHandler = async e => {
    e.preventDefault()
    if(date && isToday){
      try{
        const { data } = await mutate({
          variables:{ class: classId, date },
          refetchQueries: [{ query,variables:{ id: classId } }]
        })
        if(data){
          setDate("")
        }
      }catch(err){
        setError(err.message.replace('GraphQL error: ',''))
      }
    }
  }

  return (
    <div className="col-12 my-2 py-2" style={{background: 'rgba(200,201,202,.09)'}}>
      {error && <CloseAlert type="danger">{error}</CloseAlert>}
      <form onSubmit={submitHandler} className="d-flex align-items-center">
          <input
            type="text"
            className="form-control m-2 disabled"
            value={date}
            disabled={true}
            placeholder={date}
          />
        <button disabled={!isToday} className="btn btn-info m-2">create</button>
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
