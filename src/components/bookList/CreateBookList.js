import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import Select from './Select'
import CloseAlert from '../CloseAlert'
import query from './Query'

const CreateBookList = ({mutate,info}) => {
  const [probidan,setProbidan] = useState('2016')
  const [department,setDepartment] = useState('')
  const [semester,setSemester] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(probidan && department && semester){
        const {data} = await mutate({
          variables:{ probidan, department, semester },
          refetchQueries: [{ query }]
        })
        if(data.createBookList){
          const dep = data.createBookList.department
          const sem = data.createBookList.semester
          setSuccess(`A new bookList created for ${dep.name } ${sem.name} semester!`)
          setError('')
        }
      }
    }catch(e){
      setError(e.message)
      setSuccess('')
    }
  }

  return (
    <div className="col-md-10 p-4 my-4" style={{background:"#E9ECEF"}}>
      <h3 className="text-center mt-2 mb-4">Create A BookList</h3>
      {success && <CloseAlert type="success">{success}</CloseAlert>}
      {error && <CloseAlert type="danger">{error}</CloseAlert>}

      <form onSubmit={submitHandler}>
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-3 my-2">
            <input
              value={probidan}
              onChange={e => setProbidan(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Probidan"
            />
          </div>
          <Select
            value={department}
            setValue={setDepartment}
            plh="Select Department"
            options={info.departments}
          />
          <Select
            value={semester}
            setValue={setSemester}
            plh="Select Semester"
            options={info.semesters}
          />
        <button type="submit" className="btn btn-info my-2 col-sm-6 col-md-1">add</button>
        </div>
      </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateBookList($probidan: String!,$department: ID!,$semester: ID!){
    createBookList(data:{
      probidan: $probidan,
      department: $department,
      semester: $semester
    }){
      id
      department{ id name }
      semester{ id name }
    }
  }

`

export default graphql(mutation)(CreateBookList)
