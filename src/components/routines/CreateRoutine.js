import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import Select from './Select'
import SelectSession from './SelectSession'
import SelectShift from './SelectShift'
import CloseAlert from '../CloseAlert'
import query from '../bookList/Query'

const CreateRoutine = ({info,mutate}) => {
  const [title,setTitle] = useState('')
  const [session,setSession] = useState('')
  const [semester,setSemester] = useState('')
  const [department,setDepartment] = useState('')
  const [shift,setShift] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const shifts = ['MORNING','DAY']

  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(title && session && semester && department && shift){
        const { data } = await mutate({
          variables: { title, session, semester, department, shift },
          fetchQueries: [{ query }]
        })
        if(data){
          setSuccess('New Routine created successfully!')
          setError('')
          setTitle('');setDepartment('');setShift('');setSuccess('');setSemester('');
        }
      }
    }catch(e){
      setError(e.message)
      setSuccess('')
    }
  }

  return (
    <div className="col-md-10 bg-light">
      <h3 className="my-3 text-center">Create Routine</h3>
      {success && <CloseAlert type="success">{success}</CloseAlert>}
      {error && <CloseAlert type="danger">{error}</CloseAlert>}
      {info.departments && <form onSubmit={submitHandler}>
        <div className="row px-3 pb-4 justify-content-center">
          <input
            type="text"
            className="form-control col-md-3 my-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
          <Select value={department} setValue={setDepartment} options={info.departments} plh="Department" />
          <Select value={semester} setValue={setSemester} options={info.semesters} plh="Semester" />
          <SelectSession value={session} setSession={setSession} sessions={info.sessions} plh="Session" />
          <SelectShift value={shift} setValue={setShift} options={shifts} plh="Shift"/>
          <div className="col-md-2 my-2"><button className="btn btn-info px-3">add</button></div>
        </div>
      </form>}
    </div>
  )
}
const mutation = gql`
  mutation CreateRoutine($title: String!,$department: ID!,$semester: ID!, $session: ID!,$shift: String!){
    createRoutine(data:{
      title: $title,
      department: $department,
      semester: $semester,
      session: $session,
      shift: $shift
    }){
      id
      title
    }
  }
`

export default graphql(mutation)(CreateRoutine)
