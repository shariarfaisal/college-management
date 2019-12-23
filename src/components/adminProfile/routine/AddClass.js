import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import SelectDay from './SelectDay'
import SelectPeriod from './SelectPeriod'
import SelectTeacher from './SelectTeacher'
import SelectBook from './SelectBook'
import CloseAlert from '../../CloseAlert'
import query from './query'

const AddClass = ({routine,mutate}) => {
  const [day,setDay] = useState('')
  const [period,setPeriod] = useState('')
  const [mentor,setMentor] = useState('')
  const [subject,setSubject] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(day && period && mentor && subject){
      try{
        const { data } = await mutate({
          variables: { day, period, mentor, subject, semester: routine.semester.id, department: routine.department.id },
          refetchQueries: [{ query,variables: { id: routine.id } }]
        })
        if(data){
          setSuccess('Class added successfully!')
          setDay('');setPeriod('');setMentor('');setSubject('');
          setError('')
        }
      }catch(err){
        setError(err.message)
        setSuccess('')
      }
    }
  }
  return (
    <div title="Create Class" className="py-3 px-2 my-3" style={{background: "rgba(184, 192, 199, 0.32)"}}>
      <p className="text-center">Create class</p>
      <form onSubmit={submitHandler}>
        {success && <CloseAlert type="success">{success}</CloseAlert>}
        {error && <CloseAlert type="danger">{error}</CloseAlert>}
        <div className="d-flex justify-content-center">
          <SelectDay day={day} setDay={setDay} days={routine.days}/>
          <SelectPeriod period={period} setPeriod={setPeriod} />
        </div>
        <div className="d-flex justify-content-center">
          <SelectTeacher mentor={mentor} setMentor={setMentor} />
          <SelectBook subject={subject} setSubject={setSubject} bookLists={routine.semester.bookLists}/>
          <button className="btn btn-info px-4 m-2">add</button>
        </div>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateClass($day: ID!,$period: ID!,$mentor: ID!,$subject: ID!,$semester: ID!,$department: ID!){
    createClass(data:{
      day: $day,
      period: $period,
      mentor: $mentor,
      subject: $subject,
      semester: $semester,
      department: $department
    }){
      id
    }
  }
`

export default graphql(mutation)(AddClass)
