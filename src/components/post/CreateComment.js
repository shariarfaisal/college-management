import React,{ Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../store/actions/post'
import { useParams } from 'react-router-dom'

const CreateComment = ({ create, createComment }) => {
  const [body,setBody] = useState('')
  const [open,setOpen] = useState(false)
  const { id } = useParams()

  const onSubmitHandler = e => {
    e.preventDefault()
    createComment({
      postId: id,
      body,
      resetForm: () => setBody('')
    })
  }

  return(
    <div className="create-comment">
      <label htmlFor="comment" onClick={e => setOpen(!open)} className="title d-flex align-items-center">
        <i className={`bx bx-comment-${open?'minus': 'add'}`}></i>
        <span className="ml-2">Comment</span>
      </label>
      {open && <form onSubmit={onSubmitHandler}>
        <textarea
          id="comment"
          required={true}
          className="form-control"
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder="Comment">
        </textarea>
        {create.error && create.error.body && <small className="text-danger" style={{fontSize: '1rem'}}>{create.error.body}</small>}
        <div className="footer d-flex my-4">
          <button onClick={e => setOpen(false)} className="btn btn-sm px-3 btn-warning mx-2 rounded-20 ml-auto" type="button">Cancel</button>
          <button disabled={create.loading} className="btn btn-info btn-sm rounded-20 px-3" type="submit">
            <span>Submit</span>
            {create.loading && <i className="bx bx-loader bx-spin ml-1"></i>}
          </button>
        </div>
      </form>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    create: state.post.createComment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createComment: (arg) => dispatch(createComment(arg))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateComment)
