import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import CreateComment from './CreateComment'

const CommentItem = (props) => {
  return (
    <div className="comments-item">
      <div className="header">
        <img className="profile-img" src="./img/profile.jpg" alt="Profile Name" />
        <Link to="/" className="name">Sharia Emon</Link>
        <small className="time">45 min ago</small>
      </div>
      <p className="body">An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).</p>
    </div>
  )
}

const Post = (props) => {
  return(
    <div className="content-home-posts">
      <SearchBar />
      <div className="post">

        <div className="header">
          <img className="profile-img" src="img/profile.jpg" alt="" />
          <div className="identity">
            <Link className="name">Sharia Emon Faisal</Link>
            <small className="work">Software Engineer</small>
          </div>
        </div>

        <div className="post-body">
          <h3 className="title">This is the title of this post here we go..</h3>
          <div className="body">
            <p>
            An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling Note: A "positioned" element is one whose position is anything except static.
            <br />
            <br />
            An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling Note: A "positioned" element is one whose position is anything except static.
            </p>
          </div>


          <CreateComment />


          <div className="comments">

            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />
            <CommentItem />

          </div>


        </div>
      </div>
    </div>
  )
}
export default Post
