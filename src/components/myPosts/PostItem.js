import React from 'react'
import { Link } from 'react-router-dom'


const PostItem = ({ id, title, tags, createdAt, profile }) => {
  return(
    <div className="posts-item d-flex align-items-center">
      <Link style={{fontSize: '1rem'}} to={`/post/${id}`} className="title text-info">{title}</Link>
      <small className="ml-auto text-muted timestamp" style={{fontSize: '.8rem'}}>
        {new Date(createdAt).toLocaleDateString().replaceAll('/','-')}
      </small>
    </div>
  )
}
export default PostItem
