import React,{ useState, memo } from 'react'
import { graphql } from 'react-apollo'
import Select from './Select'
import SelectSession from './SelectSession'
import SelectShift from './SelectShift'
import CloseAlert from '../../CloseAlert'
import routineQuery from './routineQuery'
import Alert from '../../Alert'
import { createRoutine } from './mutations'

const [orderBy,first,skip,shifts] = ["id_DESC",10,0,['MORNING','DAY']]

const CreateRoutine = ({info,mutate}) => {
  const [title,setTitle] = useState('')
  const [session,setSession] = useState('')
  const [semester,setSemester] = useState('')
  const [department,setDepartment] = useState('')
  const [shift,setShift] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const { departments, semesters, sessions } = info


  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(title && session && semester && department && shift){
        const { data } = await mutate({
          variables: { title, session, semester, department, shift },
          refetchQueries: [{ query: routineQuery,variables:{ orderBy, first, skip } }]
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
    <div className="col-md-10 mb-2" style={{background: "rgba(184, 192, 199, 0.32)"}}>
      <h3 className="my-3 text-center">Create Routine</h3>
      <Alert success={success} error={error} />
      <form onSubmit={submitHandler}>
        <div className="row px-3 pb-4 justify-content-center">
          <input
            type="text"
            className="form-control col-md-3 my-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />
          <Select value={department} setValue={setDepartment} options={departments} plh="Department" />
          <Select value={semester} setValue={setSemester} options={semesters} plh="Semester" />
          <SelectSession value={session} setSession={setSession} sessions={sessions} plh="Session" />
          <SelectShift value={shift} setValue={setShift} options={shifts} plh="Shift"/>
          <div className="col-md-2 my-2"><button className="btn btn-info px-3">add</button></div>
        </div>
      </form>
    </div>
  )
}


export default graphql(createRoutine)(memo(CreateRoutine))
