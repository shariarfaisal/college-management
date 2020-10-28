import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions/profile'
import PostItem from './PostItem'
import Filter from './Filter'

function Posts({ loading, data, error, posts, pagination, filter, getPosts }) {

  useEffect(() => {
    getPosts({
      profileId: data.profile.id,
      limit: pagination.limit,
      page: pagination.page,
      published: filter.published,
      date: filter.date 
    })
  },[])

  return(
    <div className="posts-wrapper row mx-0 justify-content-center">
      {posts.loading && <div>loading...</div>}
      <Filter />
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
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (id) => dispatch(getPosts(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
