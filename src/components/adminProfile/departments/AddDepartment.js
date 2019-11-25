import React,{ useState } from 'react'
// import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'
import { depQuery } from '../queries'

const AddDepartment = (props) => {
  const [name,setName] = useState('')
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
        setName("")
        if(data.createDepartment){
          setName('')
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
      {success && <CloseAlert type="success">{success}</CloseAlert>}
      {error && <CloseAlert type="danger">{error}</CloseAlert>}
        <input
          type="text"
          className="form-control my-2"
          value={name}
          onChange={e => setName(e.target.value)}
          id="department"
          placeholder="Department Name"
        />
        <button type="submit" className="btn btn-info px-4">Add</button>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateDepartment($name: String!){
    createDepartment(data:{
      name: $name
    }){
      id
      name
    }
  }
`

export default graphql(mutation)(AddDepartment)
