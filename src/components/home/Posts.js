import React,{ useEffect } from 'react'
import PostItem from './PostItem'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions/posts'


const Posts = ({ posts, getPosts }) => {

  useEffect(() => {
    getPosts()
  },[])

  return(
    <div className="content-home-posts">
      {posts.loading && <div>loading...</div>}
      <div className="posts">

        {posts.data && posts.data.map((post,i) => <PostItem key={i} {...post} />)}

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)
