import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'
import { semesterQuery } from '../queries'

const mutation = gql`
  mutation CreateSemester($name: String!){
    createSemester(data:{
      name: $name
    }){
      id
      name
    }
  }
`

const AddSemester = (props) => {
  const [name,setName] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  // const [addToDo,{ data, error: err }] = useMutation(mutation)

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const {data} = await props.mutate({
        variables:{ name: name.toUpperCase() },
        refetchQueries: [{ query: semesterQuery }]
      })
      if(data.createSemester){
        setName('')
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
    {success && <CloseAlert type="success">{success}</CloseAlert>}
    {error && <CloseAlert type="danger">{error}</CloseAlert>}
      <form className="d-flex justify-content-around" onSubmit={submitHandler}>
        <input
          className="form-control m-2"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Add Semester..."
        />
        <button className="btn btn-info px-3 m-2">Add</button>
      </form>
    </div>
  )
}

export default graphql(mutation)(AddSemester)
