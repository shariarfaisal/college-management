import React,{ useState } from 'react'
import Input from './Input'
import months from './months'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'
// import { query } from './Body'

const AddDay = ({ mutate }) => {
  const [day,setDay] = useState('')
  const [month,setMonth] = useState('')
  const [year,setYear] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(day && month && year){
      try{
        const date = `${day > 9 ? day : '0'+Number(day)}-${month}-${year}`
        const { data } = await mutate({
          variables: { date }
        })
        if(data){
          setError('')
          setSuccess(`${data.createAttendenceDay.date} Date created!`)
          setDay('')
        }
      }catch(err){
        setSuccess('')
        setError(err.message.replace('GraphQL error:',''))
      }
    }
  }


  return (
    <div className="py-3 my-3 col-md-12" style={{background: 'rgba(200,201,202,.09)'}}>
      {success && <CloseAlert type="success">{success}</CloseAlert>}
      {error && <CloseAlert type="danger">{error}</CloseAlert>}
      <form onSubmit={submitHandler} className="d-flex justify-content-center">
        <Input value={day} set={setDay} plh="Day" />
        <select className="custom-select m-2" onChange={e => setMonth(e.target.value)} value={month}>
          <option value="">Select Month</option>
          {months.map(({v,m}) => (
            <option value={v} key={v}>{m}</option>
          ))}
        </select>
        <Input value={year} set={setYear} plh="Year" />
        <button className="btn btn-info m-2" type="submit">add</button>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateAttendenceDay($date: String!){
    createAttendenceDay(data:{
      date: $date
    }){
      id date
    }
  }
`

export default graphql(mutation)(AddDay)
