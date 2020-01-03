import React,{ useState } from 'react'
import ControlledEditor from '../../ControlledEditor';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import query from './query'
import { updateNote } from './mutations'
const [first,orderBy,skip] = [20,'id_DESC',0]

const  Update = ({ title: ttl, text: txt, id, mutate, setIsUpdate }) => {
  const [title,setTitle] = useState(ttl)
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState('')

  const blocksFromHtml = htmlToDraft(txt);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

  const [editorState,setEditorState] = useState(EditorState.createWithContent(contentState))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  const submitHandler = async e => {
    e.preventDefault()
    const text = draftToHtml(convertToRaw(editorState.getCurrentContent()))
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
          <Styling className="my-3">
            <ControlledEditor   editorState={editorState} onEditorStateChange={onEditorStateChange}/>
          </Styling>
          <button onClick={e => setIsUpdate(false)} type="button" className="btn btn-danger px-4 mx-2">cancel</button>
          <button type="submit" className="btn btn-info px-4">update</button>
        </form>
      </div>
    </div>
  )
}

const Styling = styled.div`
  padding: 20px;
  border-radius: 5px;
  background: #dfdfdf36;
  .public-DraftEditor-content{
    min-height: 200px;
  }
  .rdw-editor-toolbar{
    background: #edf0f0;
    border-radius: 5px;
  }
`

export default graphql(updateNote)(Update)
