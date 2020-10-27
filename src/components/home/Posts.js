import React,{ useState, useEffect } from 'react'
import PostItem from './PostItem'
import { connect } from 'react-redux'
import { getPosts, getSearch, getPaginate } from '../../store/actions/posts'
import Filter from './Filter'

const limits = [10,20,30,40,50,75,100]

const Posts = ({ posts, getPosts, getPaginate }) => {
  const [limit,setLimit] = useState(limits[0])
  const [search,setSearch] = useState('')
  const [page,setPage] = useState(1)

  const pageHandler = (arg) => {
    if(arg === 'next'){
      getPaginate({ page: page + 1, limit })
      setPage(page+1)
    }else if(arg === 'prev' && page > 1){
      getPaginate({ page: page-1, limit })
      setPage(page-1)
    }
  }

  useEffect(() => {
    getPosts({ limit, page })
  },[])

  return(
    <div className="posts-wrapper row mx-0 justify-content-center">
      {posts.loading && <div className="col-12 text-center text-muted" style={{fontSize: '1rem'}}>loading...</div>}
      {!posts.loading && <div className="col-sm-10 col-md-8">
        <div className="posts">
          <Filter
            limit={limit}
            setLimit={setLimit}
            limits={limits}
            search={search}
            setSearch={setSearch}
          />
          {posts.data && posts.data.map(
            (post,i) => <PostItem key={i} {...post} />)
          }
          {posts.data && !(posts.data.length < posts.pagination.limit && posts.pagination.page === 1) && <div className="d-flex justify-content-center m-4">
            <button
              onClick={() => pageHandler('prev')}
              disabled={page <= 1 || posts.pagination.loading}
              type="button"
              className="btn btn-warning outline-0 px-4 rounded-20 mx-3 d-flex align-items-center">
                <i className="bx bx-left-arrow-circle ml-1"></i>
                Prev
            </button>
            <button
              disabled={posts.pagination.loading || posts.data.length < posts.pagination.limit}
              onClick={() => pageHandler('next')}
              type="button"
              className="btn btn-info outline-0 px-4 rounded-20 mx-3  d-flex align-items-center">
                Next
                <i className="bx bx-right-arrow-circle ml-1"></i>
            </button>
          </div>}
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
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (arg) => dispatch(getPosts(arg)),
    getSearch: (arg) => dispatch(getSearch(arg)),
    getPaginate: (arg) => dispatch(getPaginate(arg)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)
