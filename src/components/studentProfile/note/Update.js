import React,{ useState } from 'react'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import query from './query'
import { updateNote } from './mutations'
const [first,orderBy,skip] = [20,'id_DESC',0]

const  Update = ({ title: ttl, text: txt, id, mutate, setIsUpdate }) => {
  const [title,setTitle] = useState(ttl)
  const [text,setText] = useState(txt)
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(title && text){
      try{
        const {data} = await mutate({
          variables: { id, title, text },
          refetchQueries: [{ query, variables:{ id } }]
        })
        if(data){
          setSuccess('Updated successfully')
          setError('')
        }
      }catch(err){
        setError(err.message)
        setSuccess('')
      }
    }
  }

  return (
    <div className="p-3 mb-4">
      <h3 className="my-2 text-info">Update Note</h3>
      <div>
        <Alert success={success} error={error} />
        <form onSubmit={submitHandler} className="my-3">
          <input
            type="text"
            className="form-control my-2"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Your note will be here..."
            row="5"
            col="10"
            className="form-control my-2"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button onClick={e => setIsUpdate(false)} type="button" className="btn btn-danger px-4 mx-2">cancel</button>
          <button type="submit" className="btn btn-info px-4">update</button>
        </form>
      </div>
    </div>
  )
}


export default graphql(updateNote)(Update)
