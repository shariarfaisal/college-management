import React,{ useEffect } from 'react'
import Layout from '../layout'
import './post.scss'
import { connect } from 'react-redux'
import { getPost } from '../../store/actions/post'
import Header from './Header'
import PostBody from './PostBody'


const Post = ({ getPostById, match, post}) => {

  useEffect(() => {
    getPostById(match.params.id)
  },[])

  return(
    <Layout>
      <div className="row mx-0 justify-content-center post-page">
        <div className="col-sm-10 col-md-8">
          <div className="post">
            {post.loading && <small>loading...</small>}
            {post.data && <Header {...post.data.profile} />}
            {post.data && <PostBody {...post.data} />}
            {post.error && <p style={{textAlign: 'center',marginTop: '40px'}}>Not Found</p>}
          </div>
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
