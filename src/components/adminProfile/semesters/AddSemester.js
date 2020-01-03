import React,{ useState } from 'react'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import { semesterQuery } from '../queries'
import useInput from '../../hooks/useInput'
import mutation from './mutation'

const AddSemester = (props) => {
  const [name,bindName,resetName] = useInput('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const {data} = await props.mutate({
        variables:{ name: name.toUpperCase() },
        refetchQueries: [{ query: semesterQuery }]
      })
      if(data.createSemester){
        resetName()
        setSuccess(`New semester ${data.createSemester.name} created successfully!`)
        setError('')
      }
    } catch (e) {
      setError("Type is not valid or Semester already exists!")
      setSuccess('')
    }
  }

  return (
    <div className="col-12">
    <Alert success={success} error={error}/>
      <form className="d-flex justify-content-around" onSubmit={submitHandler}>
        <input
          {...bindName}
          className="form-control m-2"
          placeholder="Add Semester..."
        />
        <button className="btn btn-info px-3 m-2">Add</button>
      </form>
    </div>
  )
}

export default graphql(mutation)(AddSemester)
