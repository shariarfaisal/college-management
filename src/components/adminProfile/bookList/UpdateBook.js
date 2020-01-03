import React,{ useState } from 'react'
import useInput from '../../hooks/useInput'
import { graphql } from 'react-apollo'
import { updateBook } from './mutation'
import Alert from '../../Alert'

function UpdateBook(props) {
  const [name,bindName] = useInput(props.name)
  const [code,bindCode] = useInput(props.code)
  const [success,setSucces] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(name && code){
      try{
        const { data } = await props.mutate({
          variables: { id: props.id, name, code,bookList: props.bookList }
        })
        if(data){
          console.log(data);
          setSucces('Updated!')
          setError('')
        }
      }catch(err){
        setError(err.message)
        setSucces('')
      }
    }
  }

  return(
    <form onSubmit={submitHandler} className="row justify-content-around py-2 my-2" style={{background: '#e9e9e9',borderRadius: '5px'}}>
      {success && <p className="text-success col-12 mb-0">{success}</p>}
      {error && <p className="text-danger col-12 mb-0">{error}</p>}
      <input {...bindName} className="form-control col-7" />
      <input {...bindCode} className="form-control col-4" />
      <div className="d-flex justify-content-start col-12 my-2">
        <button onClick={e => props.setIsEdit(false)} type="button" className="btn btn-sm btn-danger mx-2">cancel</button>
        <button type="submit" className="btn btn-sm btn-info mx-2">save</button>
      </div>
    </form>
  )
}
export default graphql(updateBook)(UpdateBook)
