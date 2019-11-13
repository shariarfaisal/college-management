import React,{ useState } from 'react'
import CloseAlert from '../CloseAlert'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import query from './Query'

const CreateBook = ({ bookList, mutate }) => {
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(bookList && name && code){
        const { data } = await mutate({
          variables: { name, code, bookList },
          refetchQueries: [{ query }]
        })
        if(data.createBook){
          setSuccess('Added a new book in this book-list successfully!')
          setName('');setCode('')
        }
      }
    }catch(e){
      setError(e.message)
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="row justify-content-around mb-5">
        <h3 className="text-center col-12 my-3">Add Book</h3>
        {success && <div className="col-12"><CloseAlert type="success">{success}</CloseAlert></div>}
        {error && <div className="col-12"><CloseAlert type="danger">{error}</CloseAlert></div>}
        <input value={name} onChange={e => setName(e.target.value)} className="col-md-6 form-control my-2" type="text" placeholder="Name"/>
        <input value={code} onChange={e => setCode(e.target.value)} className="col-md-3 form-control my-2" type="text" placeholder="Code"/>
        <button type="submit" className="btn col-sm-6 col-md-2 btn-info my-2">add</button>
      </div>
    </form>
  )
}

const mutation = gql`
  mutation CreateBook($name: String!,$code: String!,$bookList: ID!){
    createBook(data:{
      name: $name,
      code: $code,
      bookList: $bookList
    }){
      id
      name
      code
    }
  }

`

export default graphql(mutation)(CreateBook)
