import React,{ useState, memo } from 'react'
import { EditorState, convertToRaw } from 'draft-js';
import ControlledEditor from '../../ControlledEditor';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import query from './query'
import useInput from '../../hooks/useInput'
import mutation from './mutation'
import styled from 'styled-components'

const [first,skip,orderBy] = [15, 0, "createdAt_DESC"]

const CreateNotice = ({mutate}) => {
  const [title,bindTitle,resetTitle] = useInput('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const [text,setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  }

  const submitHandler = async e => {
    e.preventDefault()
    const txt = draftToHtml(convertToRaw(text.getCurrentContent()))
    if(title && txt){
      try{
        const { data } = await mutate({
          variables: { title, text: txt },
          refetchQueries: [{ query,variables: { first, skip, orderBy, query: '' } }]
        })
        if(data){
          setSuccess('Notice created!');
          resetTitle();
          setEditorState(EditorState.createEmpty())
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
          <Styling className="my-3">
            <ControlledEditor   editorState={text} onEditorStateChange={onEditorStateChange}/>
          </Styling>
          <button type="submit" className="btn btn-info m-2 px-3">submit</button>
        </form>
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

export default graphql(mutation)(memo(CreateNotice))
