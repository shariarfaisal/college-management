import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CloseAlert from '../../CloseAlert'
import { query } from './Notices'

const CreateNotice = ({mutate}) => {
  const [title,setTitle] = useState('')
  const [text,setText] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const first = 15
  const skip = 0
  const orderBy = "createdAt_DESC"

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
          console.log(data);
          setTitle('');setText('');
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
        {success && <CloseAlert type="success">{success}</CloseAlert>}
        {error && <CloseAlert type="danger">{error}</CloseAlert>}
        <form onSubmit={submitHandler} className="collapse mt-3" id="notice-collapse">
          <input
            type="text"
            className="form-control my-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="title..."
          />
          <textarea
            className="form-control my-2"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="description..."
          />
          <button type="submit" className="btn btn-info m-2 px-3">submit</button>
        </form>
    </div>
  )
}

const mutation = gql`
  mutation CreateNotice($title: String!,$text: String!){
    createNotice(data:{
      title: $title,
      text: $text
    }){
      id title text
    }
  }
`

export default graphql(mutation)(CreateNotice)
