import React,{ memo, useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../CloseAlert'


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
        variables:{ name: name.toUpperCase() }
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
    <div className="col-sm-10 col-md-6 col-lg-4 my-3">
      <div className="card rounded-0" style={{background:"#E9ECEF"}}>
        <div className="card-body">
          <h3 className="my-3">Add Semester</h3>
          {success && <CloseAlert type="success">{success}</CloseAlert>}
          {error && <CloseAlert type="danger">{error}</CloseAlert>}
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="FIRST, SECOND, THIRD ... SEVENTH"
              />
            </div>
            <button className="btn btn-info px-3">Add</button>
          </form>
          <div className="row py-4">
            {
              props.semesters && props.semesters.map((sem,i) => {
                return <span key={i} className=" text-center col bg-light text-dark py-2 px-3 m-2 rounded">{sem.name}</span>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}



export default graphql(mutation)(memo(AddSemester))
// export default memo(AddSemester)
