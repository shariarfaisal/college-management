import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../CloseAlert'
import query from './query'

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
          refetchQueries: [{ query }]
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
    <div className="collapse" id="collapse-note">
    {success && <CloseAlert type="success">{success}</CloseAlert>}
    {error && <CloseAlert type="danger">Something wrong!</CloseAlert>}

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
  )
}

const mutation = gql`
  mutation CreateNote($title: String!,$text: String!){
    createNote(data:{
      title: $title,text: $text
    }){
      id title text
    }
  }
`

export default graphql(mutation)(AddNote)
