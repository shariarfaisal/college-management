import React,{ Fragment, useState } from 'react'

const CreateComment = (props) => {
  const [comment,setComment] = useState('')
  const [open,setOpen] = useState(false)

  return(
    <div className="create-comment">
      <label htmlFor="comment" onClick={e => setOpen(true)} className="title"><i className="bx bx-plus"></i> Comment</label>
      {open && <Fragment>
        <textarea
          id="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Comment">
        </textarea>
        <div className="footer">
          <button onClick={e => setOpen(false)} className="cancel" type="button">Cancel</button>
          <button className="submit" type="submit">Submit</button>
        </div>
      </Fragment>}
    </div>
  )
}
export default CreateComment
