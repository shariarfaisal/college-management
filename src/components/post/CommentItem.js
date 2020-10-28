import React from 'react'
import { Link } from 'react-router-dom'

const CommentItem = ({ id, body, createdAt, profile }) => {
  return (
    <div className="comments-item d-flex">
      <div className="image">
        <img width="30px" className="rounded-circle" src="/img/profile.jpg" alt="Profile Name" />
      </div>
      <div className="middle">
        <Link className="name text-info" to={`/user/${profile.id}`}>{profile.name}</Link>
        <p className="comment mb-0">{body}</p>
        <div className="time text-muted ml-3 pt-1">
          {new Date(createdAt).toLocaleString().replaceAll('/','-')}
        </div>
      </div>
      <div className="setting d-flex text-muted">
        <span className="icon ml-auto"><i className="bx bx-dots-vertical"></i></span>
      </div>
    </div>
  )
}


export default CommentItem
