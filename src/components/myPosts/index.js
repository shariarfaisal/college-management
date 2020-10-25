import React,{ useEffect } from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions/profile'
import PostItem from '../home/PostItem'

function MyPosts({ userId, posts, getPosts }) {

  useEffect(() => {
    getPosts(userId)
  },[])

  return(
    <Layout>
      <div className="content-home-posts">
        {posts.loading && <div>loading...</div>}
        <div className="posts">

          {posts.data && posts.data.map((post,i) => <PostItem key={i} {...post} />)}

        </div>
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
