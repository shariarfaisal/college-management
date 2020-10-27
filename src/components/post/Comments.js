import React,{ useEffect } from 'react'
import CommentItem from './CommentItem'
import { connect } from 'react-redux'
import { getComments } from '../../store/actions/post'
import { useParams } from 'react-router-dom'

function Comments({ comments, getComments, match }) {
  const { id } = useParams()
  useEffect(() => {
     getComments(id)
  },[])
  
  return(
    <div className="comments">
      {comments.loading && <div className="text-muted" style={{fontSize: '1rem'}}>loading...</div>}
      {comments.data && comments.data.map((comment,i) => <CommentItem key={i} {...comment} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    comments: state.post.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getComments: (id) => dispatch(getComments(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments)
