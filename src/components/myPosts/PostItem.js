import React from 'react'
import { Link } from 'react-router-dom'


const PostItem = ({ id, title, tags, createdAt, profile }) => {
  return(
    <div className="posts-item d-flex align-items-center">
      <Link className="profile" to={`/user/${profile.id}`}>
        <img src="../img/profile.jpg" alt="Profile" />
      </Link>
      <Link to={`/post/${id}`} className="title text-info">{title}</Link>
      <small className="ml-auto text-muted timestamp">{createdAt}</small>
    </div>
  )
}
export default PostItem
