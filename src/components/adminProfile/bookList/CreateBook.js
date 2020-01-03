import React,{ useState, memo } from 'react'
import {createBook} from './mutation'
import Alert from '../../Alert'
import { graphql } from 'react-apollo'
import useInput from '../../hooks/useInput'
import { bookList as query } from './Query'

const CreateBook = ({ bookList, mutate }) => {
  const [name,bindName,resetName] = useInput()
  const [code,bindCode,resetCode] = useInput('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(bookList && name && code){
        const { data } = await mutate({
          variables: { name, code, bookList },
          refetchQueries: [{ query,variables:{ id: bookList } }]
        })
        if(data.createBook){
          setError('')
          resetName();resetCode()
        }
      }
    }catch(e){
      setError(e.message)
    }
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="row justify-content-around mb-5">
        {error && <div className="col-12 text-danger"><p>{error.replace('GraphQL error:','')}</p></div>}
        <input {...bindName} className="col-md-6 form-control my-2" placeholder="Name"/>
        <input {...bindCode} className="col-md-3 form-control my-2" placeholder="Code"/>
        <button type="submit" className="btn col-sm-6 col-md-2 btn-info my-2">add</button>
      </div>
    </form>
  )
}


export default graphql(createBook)(memo(CreateBook))
