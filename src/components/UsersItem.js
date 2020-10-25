import React from 'react'
import { Link } from 'react-router-dom'

const UsersItem = ({ id, username, profile }) => {
  return (
    <div className="users-item">
      <Link className="profile" to="/"><img width="100%" src="/img/profile.jpg" alt="Name" /></Link>
      <div className="body">
        <Link className="name" to={`/${username}`}>{profile.name}</Link>
        <small className="work">@{username}</small>
        <Link className="posts" to={`/${username}/${id}`}>Posts</Link>
      </div>
    </div>
  )
}

export default UsersItem
