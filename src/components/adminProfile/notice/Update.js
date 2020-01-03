import React,{ useState } from 'react'
import useInput from '../../hooks/useInput'
import { updateNotice } from './mutations'
import { graphql } from 'react-apollo'
import { noticeQuery } from './query'

function Update(props) {
  const [title,bindTitle] = useInput(props.title)
  const [text,bindText] = useInput(props.text)
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')



  const submitHandler = async e => {
    e.preventDefault()
    if(title && text){
      try{
        const { data } = await props.mutate({
          variables:{ id: props.id, title, text},
          refetchQueries:[{ query: noticeQuery,variables:{ id: props.id }}]
        })
        if(data) setSuccess('Updated!')
      }catch(err){ setError(err.message) }
    }
  }



  return(
    <div className="card-body">
      <form onSubmit={submitHandler}>
        <h3 className="card-title">Update Mode</h3>
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input {...bindTitle} id="title" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Title</label>
          <textarea {...bindText} id="text" className="form-control"></textarea>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button onClick={e => props.setUpdateMode(false)} type="button" className="btn btn-sm btn-secondary mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-info mx-2">save</button>
        </div>
      </form>
    </div>
  )
}
export default graphql(updateNotice)(Update)
