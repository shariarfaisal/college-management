import React,{ useState } from 'react'
// import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../CloseAlert'

const CreateDepartment = (props) => {
  const [name,setName] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    if(name){
      try {
        const { data } = await props.mutate({
          variables:{ name }
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
    <div className="col-sm-10 col-md-6 col-lg-4 my-3">
      <div className="card rounded-0"  style={{background: "#E9ECEF"}}>
        <div className="card-body">
          <h3 className="my-3">Add Department</h3>
          {success && <CloseAlert type="success">{success}</CloseAlert>}
          {error && <CloseAlert type="danger">{error}</CloseAlert>}
          <form onSubmit={submitHandler} className="form-row align-items-center justify-content-left">
            <div className="col-sm-10 my-1">
              <label className="sr-only" htmlFor="department">Department Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
                id="department"
                placeholder="Department Name"
              />
            </div>
            <div className="col-auto my-1">
              <button type="submit" className="btn btn-info px-4">Add</button>
            </div>
          </form>
          <div className="row py-4 justify-content-center">
            {
              props.departments && props.departments.map((dep,i) => {
                return <span key={i} className=" text-center col-sm-6 col-md-3 col-lg-2 bg-secondary text-light py-2 px-3 m-2 rounded">{dep.name}</span>
              })
            }
          </div>
        </div>
      </div>
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

export default graphql(mutation)(CreateDepartment)
