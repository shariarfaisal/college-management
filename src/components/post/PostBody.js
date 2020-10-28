import React from 'react'
import CreateComment from './CreateComment'
import Comments from './Comments'

const PostBody = ({ title, body, tags, createdAt }) => (
  <div className="post-body">
    <h3 className="title">{title}</h3>
    <div className="text-muted" style={{fontSize: '.8rem'}}>{new Date(createdAt).toLocaleString().replaceAll('/','-')}</div>
    <p className="body mt-3 bg-light p-4 shadow-sm">{body}</p>
    <div className="my-3">
      <div className="d-flex align-items-center p-2">
        <p className="mb-0 text-muted mr-4" style={{fontSize: '1.2rem'}}>Tags:</p>
        {tags.split(',').filter(i => i).map((tag,i) => (
          <div key={i} className="py-2 px-4 rounded shadow-md m-2 text-info bg-light" style={{fontSize: '.8rem'}}>{tag}</div>
        ))}
      </div>
    </div>
    <CreateComment />
    <Comments />
  </div>
)

export default PostBody
