import React,{ useState, memo } from 'react'
import Select from './Select'
import { graphql } from 'react-apollo'
import query from './query'
import Alert from '../../Alert'
import {createDayInWeek} from './mutations'
import days from './days'

const filter = (wDays,days) => {
  return days.filter(i => {
    const a = wDays.find(w => w.dayValue === i.dayValue)
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
      <Alert success={success} error={error} />
      <form onSubmit={submitHandler} className="d-flex align-items-center">
        <Select value={day} setValue={setDay} days={filter(wDays,days)} plh='Day'/>
        <button type="submit" className="btn btn-info px-3 mx-2">add</button>
      </form>
    </div>
  )
}


export default graphql(createDayInWeek)(memo(AddDays))
