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
        <div className="time text-muted ml-3 pt-1">{createdAt}</div>
      </div>
      <div className="setting d-flex text-muted">
        <span className="icon ml-auto"><i className="bx bx-dots-vertical"></i></span>
      </div>
    </div>
  )
}


// <div className="d-flex py-2">
  // <img width="20px" height="20px" className="rounded-circle" src="/img/profile.jpg" alt="Profile Name" />
//   <Link to={`/user/${profile.id}`} className="text-info ml-2" style={{fontSize: '1.1rem'}}>{profile.name}</Link>
//   <small className="ml-auto text-muted" style={{fontSize: '.8rem'}}>{createdAt}</small>
// </div>
// <p className="body">{ body }</p>


export default CommentItem
