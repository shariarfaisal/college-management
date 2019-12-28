import React,{ useState } from 'react'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import { depQuery } from '../queries'
import useInput from '../../hooks/useInput'
import mutation from './mutation'

const AddDepartment = (props) => {
  const [name,bindName,resetName] = useInput('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')


  const submitHandler = async (e) => {
    e.preventDefault()
    if(name){
      try {
        const { data } = await props.mutate({
          variables:{ name },
          refetchQueries: [{ query: depQuery }]
        })
        if(data.createDepartment){
          resetName()
          setSuccess(`New Department ${data.createDepartment.name} created successfully!`)
          setError('')
        }
      } catch (e) {
        setError("Department already exists!")
        setSuccess('')
      }
    }
  }

  return (
    <div className="col-12 my-2 p-3" style={{background: "#c8c9ca17"}}>
      <form onSubmit={submitHandler}>
        <Alert success={success} error={error} />
        <input
          {...bindName}
          className="form-control my-2"
          placeholder="Department Name"
        />
        <button type="submit" className="btn btn-info px-4">Add</button>
      </form>
    </div>
  )
}



export default graphql(mutation)(AddDepartment)
