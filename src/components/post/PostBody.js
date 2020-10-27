import React from 'react'
import CreateComment from './CreateComment'
import Comments from './Comments'

const PostBody = ({ title, body }) => (
  <div className="post-body">
    <h3 className="title">{title}</h3>
    <p className="body">{body}</p>
    <CreateComment />
    <Comments />
  </div>
)

export default PostBody
