import React,{ useState } from 'react'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import query from './notesQuery'
import { createNote } from './mutations'
const [first,orderBy,skip] = [20,'id_DESC',0]

const  AddNote = (props) => {
  const [title,setTitle] = useState('')
  const [text,setText] = useState('')
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    if(title && text){
      try{
        const {data} = await props.mutate({
          variables: { title, text },
          refetchQueries: [{ query, variables:{ query: '',first, orderBy, skip} }]
        })
        if(data){
          setSuccess('Note created successfully')
          setError(false)
          setTitle('');setText('')
        }
      }catch(err){
        setError(true)
        setSuccess('')
      }
    }
  }

  return (
    <div className="p-3 mb-4">
      <h3 className="my-2 text-info" data-toggle="collapse" data-target="#collapse-note" style={{cursor: "pointer"}}>Add Note +</h3>
      <div className="collapse" id="collapse-note">
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
          <button type="submit" className="btn btn-info px-4">add</button>
        </form>
      </div>
    </div>
  )
}


export default graphql(createNote)(AddNote)
