import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import CommentItem from './CommentItem'
import CreateComment from './CreateComment'
import Layout from '../Layout'
import './post.scss'
import { connect } from 'react-redux'
import { getPost } from '../../store/actions/post'

const Header = ({ imageUrl, name, work }) => {
  return (
    <div className="header">
      <img className="profile-img" src="./img/profile.jpg" alt="" />
      <div className="identity">
        <Link to='/' className="name">{name}</Link>
        <small className="work">{work}</small>
      </div>
    </div>
  )
}

const PostBody = ({ title, body, comments }) => (
  <div className="post-body">
    <h3 className="title">{title}</h3>
    <p className="body">{body}</p>
    <CreateComment />
    <div className="comments">
      {comments.map((comment,i) => <CommentItem key={i} {...comment} />)}
    </div>
  </div>
)


const Post = ({ getPostById, match, post}) => {

  useEffect(() => {
    getPostById(match.params.id)
  },[])

  return(
    <Layout>
      <div className="content-home-posts">
        <div className="post">
          {post.loading && <small>loading...</small>}
          {post.data && <Header {...post.data.profile} />}
          {post.data && <PostBody {...post.data} />}
          {post.error && <p style={{textAlign: 'center',marginTop: '40px'}}>Not Found</p>}
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPostById: (id) => dispatch(getPost(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)
