import React from 'react'
import { Link } from 'react-router-dom'


const PostItem = ({ id, title, tags, createdAt, profile }) => {
  return(
    <div className="posts-item">
      <div className="user">
        <img className="profile" src="./img/profile.jpg" alt="Profile" />
        <Link to={`/user/${profile.id}`} className="name">{profile.name}</Link>
        <small className="time title-5">{createdAt}</small>
      </div>
      <Link to={`/post/${id}`} className="title">{title}</Link>
      <div className="tags customScrollX">
        {tags.split(',').map((tag,i) => (
          <span key={i} className="tags-item">{tag}</span>
        ))}
      </div>
    </div>
  )
}
export default PostItem
