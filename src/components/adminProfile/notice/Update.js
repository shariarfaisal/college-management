import React,{ useState } from 'react'
import ControlledEditor from '../../ControlledEditor';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import ReactHtmlParser from 'react-html-parser';
import useInput from '../../hooks/useInput'
import { updateNotice } from './mutations'
import { graphql } from 'react-apollo'
import { noticeQuery } from './query'
import styled from 'styled-components'

function Update(props) {
  const [title,bindTitle] = useInput(props.title)
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const blocksFromHtml = htmlToDraft(props.text);
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
        <Styling className="my-3">
          <ControlledEditor   editorState={editorState} onEditorStateChange={onEditorStateChange}/>
        </Styling>
        <div className="d-flex justify-content-end mt-4">
          <button onClick={e => props.setUpdateMode(false)} type="button" className="btn btn-sm btn-secondary mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-info mx-2">save</button>
        </div>
      </form>
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

export default graphql(updateNotice)(Update)
