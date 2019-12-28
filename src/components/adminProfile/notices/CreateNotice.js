import React,{ useState, memo } from 'react'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import query from './query'
import useInput from '../../hooks/useInput'
import mutation from './mutation'

const [first,skip,orderBy] = [15, 0, "createdAt_DESC"]

const CreateNotice = ({mutate}) => {
  const [title,bindTitle,resetTitle] = useInput('')
  const [text,bindText,resetText] = useInput('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(title && text){
      try{
        const { data } = await mutate({
          variables: { title, text },
          refetchQueries: [{ query,variables: { first, skip, orderBy, query: '' } }]
        })
        if(data){
          setSuccess('Notice created!');
          resetTitle();
          resetText();
          setError('')
        }
      }catch(err){
        setSuccess('')
        setError(err.message.replace('Graphql error:',''))
      }
    }
  }

  return (
    <div className="p-3 my-3" style={{background: "rgba(200, 201, 202, 0.09)"}}>
      <h3 style={{cursor: 'pointer'}} className="mb-2" data-toggle="collapse" data-target="#notice-collapse">Publish a notice +</h3>
        <Alert success={success} error={error} />
        <form onSubmit={submitHandler} className="collapse mt-3" id="notice-collapse">
          <input {...bindTitle} className="form-control my-2" placeholder="title..." />
          <textarea className="form-control my-2" {...bindText} placeholder="description..." />
          <button type="submit" className="btn btn-info m-2 px-3">submit</button>
        </form>
    </div>
  )
}

export default graphql(mutation)(memo(CreateNotice))
