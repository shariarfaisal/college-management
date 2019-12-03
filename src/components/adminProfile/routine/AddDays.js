import React,{ useState } from 'react'
import Select from './Select'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import query from './query'
import CloseAlert from '../../CloseAlert'

const days = [
  {id: 0,dayValue: 0,day: 'SUNDAY'},
  {id: 1,dayValue: 1,day: 'MONDAY'},
  {id: 2,dayValue: 2,day: 'TUESDAY'},
  {id: 3,dayValue: 3,day: 'WEDNESDAY'},
  {id: 4,dayValue: 4,day: 'THURSDAY'},
  {id: 5,dayValue: 5,day: 'FRIDAY'},
  {id: 6,dayValue: 6,day: 'SATURDAY'},
]

const filter = (wDays,days) => {
  return days.filter(i => {
    const a = wDays.find(w => {
      return w.dayValue === i.dayValue
    })
    return !a
  })
}

const AddDays = ({id,mutate,days: wDays}) => {
  const [day,setDay] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault();
    if(day){
      try{
        const { data } = await mutate({
          variables: {
            dayValue: days[day].dayValue,
            day: days[day].day,
            routine: id
          },
          refetchQueries: [{ query,variables:{ id } }]
        })
        if(data){
          setSuccess(`${data.createDayInWeek.day} created successfully!`)
          setDay('')
          setError('')
        }
      }catch(er){
        setError(er.message)
        setSuccess('')
      }
    }
  }

  return (
    <div title="Add Days" className="py-3 px-5" style={{background: "rgba(184, 192, 199, 0.32)"}}>
      <p className="text-center">Add Days</p>
    {success && <CloseAlert type="success">{success}</CloseAlert>}
    {error && <CloseAlert type="error">{error}</CloseAlert>}
      <form onSubmit={submitHandler} className="d-flex align-items-center">
        <Select value={day} setValue={setDay} days={filter(wDays,days)} plh='Day'/>
        <button type="submit" className="btn btn-info px-3 mx-2">add</button>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateDayInWeek($dayValue: Int!,$day: String!,$routine: ID!){
    createDayInWeek(data:{
      dayValue: $dayValue,
      day: $day,
      routine: $routine
    }){
      id
      day
      dayValue
      routine{ id title }
    }
  }
`

export default graphql(mutation)(AddDays)
