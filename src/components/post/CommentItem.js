import React from 'react'
import { Link } from 'react-router-dom'

const CommentItem = (props) => {
  return (
    <div className="comments-item">
      <div className="header">
        <img className="profile-img" src="/img/profile.jpg" alt="Profile Name" />
        <Link to="/" className="name">Sharia Emon</Link>
        <small className="time">45 min ago</small>
      </div>
      <p className="body">An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).</p>
    </div>
  )
}

export default CommentItem
