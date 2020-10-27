import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions/user'
import { useParams, Link } from 'react-router-dom'


function Posts({ loading, error, data, getPosts, match }) {
  const { id } = useParams()

  useEffect(() => { getPosts(id) },[])
  return(
    <div className="p-3 my-3 col-sm-10 col-md-8 mb-5">
      <h3 className="my-3">Posts</h3>
      {loading && <div className="text-muted" style={{fontSize: '1rem'}}>loading...</div>}
      {data && data.map((post,i) => (
        <div key={i} className="row mx-0 bg-light align-items-between shadow-md my-2 p-3 align-items-center">
          <Link style={{fontSize: '1rem'}} to={`/post/${post.id}`} className="col-md-8 title text-info">{post.title}</Link>
          <small style={{fontSize: '.8rem'}} className="col-md-4 ml-auto text-muted timestamp">{post.createdAt}</small>
        </div>
      ))}
      {data && data.length === 0 && <div className="text-muted text-center p-5">There is no post.</div>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.user.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: (id) => dispatch(getPosts(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Posts)
