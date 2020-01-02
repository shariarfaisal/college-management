import React,{ useState, memo } from 'react'
import months from './months'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import { attendenceDays } from './query'
import { createAttendenceDay } from './mutations'

const AddDay = ({ mutate, year }) => {
  const [day,setDay] = useState('')
  const [month,setMonth] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const [run,setRun] = useState(false)



  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(month && year){
        const Mnth = months.find(i => Number(i.v) === Number(month))
        const bc =  Mnth.days.sort((a,b) => {
          return Number(a.date.split('-')[0]) - Number(b.date.split('-')[0])
        })
        const ab = Mnth.days.length > 0 ? Number(bc[bc.length -1].date.split('-')[0])+1 : 1
        if(Mnth && Mnth.days.length !== Mnth.td){
          for(let i=ab; i < Mnth.td+1; i++){
            setRun(true)
            const date = `${i > 9 ? i : '0'+Number(i)}-${month}-${year}`
            const variables = {
              variables: { date }
            }
            if(i === Mnth.td){
              variables.refetchQueries = [{ query: attendenceDays,variables:{ query: year.toString() } }]
            }
            const { data } = await mutate(variables)
          }
          setRun(false)
        }
      }

    }catch(err){
      setSuccess('')
      setRun(false)
      setError(err.message.replace('GraphQL error:',''))
    }
  }


  return (
    <div className="py-3 my-3 col-md-12" style={{background: 'rgba(200,201,202,.09)'}}>
      <Alert success={success} error={error} />
      <form onSubmit={submitHandler} className="d-flex justify-content-center">
        <select className="custom-select m-2" onChange={e => setMonth(e.target.value)} value={month}>
          <option value="">Select Month</option>
          {months.map(({v,m}) => (
            <option value={v} key={v}>{m}</option>
          ))}
        </select>
        <input
          type="text"
          value={year}
          className="form-control m-2"
          disabled={true}
        />
        <button disabled={run ? true : false} className="btn btn-info m-2" type="submit">add</button>
      </form>
    </div>
  )
}


export default graphql(createAttendenceDay)(memo(AddDay))
