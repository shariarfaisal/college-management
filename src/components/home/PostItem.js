import React from 'react'
import { Link } from 'react-router-dom'


const PostItem = (props) => {
  return(
    <div className="posts-item">
      <div className="user">
        <img className="profile" src="./img/profile.jpg" alt="Profile" />
        <Link to="/" className="name">Sharia Emon Faisal</Link>
        <small className="time">3 min ago</small>
      </div>
      <Link to='/' className="title">This is the first title of the post list...</Link>
      <div className="tags customScrollX">
        <span className="tags-item">programming</span>
        <span className="tags-item">javascript</span>
        <span className="tags-item">golang</span>
      </div>
    </div>
  )
}
export default PostItem
