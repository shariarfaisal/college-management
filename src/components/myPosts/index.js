import React,{ useEffect } from 'react'
import Layout from '../layout'
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions/profile'
import PostItem from './PostItem'

function MyPosts({ userId, posts, getPosts }) {

  useEffect(() => {
    getPosts(userId)
  },[])

  return(
    <Layout>
      <div className="posts-wrapper row mx-0 justify-content-center">
        {posts.loading && <div>loading...</div>}
        {!posts.loading && <div className="col-sm-10 col-md-8">
          <div className="posts">
            {posts.data && posts.data.map(
              (post,i) => <PostItem key={i} {...post} />)
            }
          </div>
        </div>}
        {posts.data && posts.data.length === 0 && <div className="col-sm-10 col-md-8">
          <p className="text-center my-5 text-muted">There is no post!</p>
        </div>}
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    userId: state.profile.data.profile.id,
    posts: state.profile.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (id) => dispatch(getPosts(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyPosts)
