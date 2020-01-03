import React,{ useState } from 'react'
import { graphql } from 'react-apollo'
import { EditorState, convertToRaw } from 'draft-js';
import ControlledEditor from '../../ControlledEditor';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import styled from 'styled-components'
import Alert from '../../Alert'
import query from './notesQuery'
import { createNote } from './mutations'
const [first,orderBy,skip] = [20,'id_DESC',0]

const  AddNote = (props) => {
  const [title,setTitle] = useState('')
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState('')
  const [editorState,setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  const submitHandler = async e => {
    e.preventDefault()
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    if(title && text){
      try{
        const {data} = await props.mutate({
          variables: { title, text },
          refetchQueries: [{ query, variables:{ query: '',first, orderBy, skip} }]
        })
        if(data){
          setSuccess('Note created successfully')
          setError(false)
          setTitle('');setEditorState(EditorState.createEmpty())
        }
      }catch(err){
        setError(true)
        setSuccess('')
      }
    }
  }

  return (
    <div className="p-3 mb-4" style={{background: '#e9ecef',borderRadius: '5px'}}>
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
          <Styling className="my-3">
            <ControlledEditor   editorState={editorState} onEditorStateChange={onEditorStateChange}/>
          </Styling>
          <button type="submit" className="btn btn-info px-4">add</button>
        </form>
      </div>
    </div>
  )
}


const Styling = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: #ffffff;
  .public-DraftEditor-content{
    min-height: 200px;
  }
  .rdw-editor-toolbar{
    background: #edf0f0;
    border-radius: 5px;
  }
`


export default graphql(createNote)(AddNote)
