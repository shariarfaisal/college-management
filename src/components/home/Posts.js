import React,{ useState, useEffect } from 'react'
import PostItem from './PostItem'
import { connect } from 'react-redux'
import { getPosts, getSearch, getPaginate, setPaginationLimit } from '../../store/actions/posts'
import Filter from './Filter'

const Posts = ({ loading, data, pagination, setLimit, getPosts, getPaginate }) => {
  const [search,setSearch] = useState('')

  const pageHandler = (arg) => {
    if(arg === 'next'){
      getPaginate({ limit: pagination.limit, page: pagination.page + 1})
    }else if(arg === 'prev' && pagination.page > 1){
      getPaginate({ limit: pagination.limit, page: pagination.page - 1})
    }
  }

  useEffect(() => {
    getPosts({ limit: pagination.limit, page: pagination.page })
  },[])

  return(
    <div className="posts-wrapper row mx-0 justify-content-center">
      {loading && <div className="col-12 text-center text-muted" style={{fontSize: '1rem'}}>loading...</div>}
      {!loading && <div className="col-sm-10 col-md-8">
        <div className="posts">
          <Filter
            limit={pagination.limit}
            setLimit={setLimit}
            limits={pagination.limits}
            search={search}
            setSearch={setSearch}
          />
          {data && data.map(
            (post,i) => <PostItem key={i} {...post} />)
          }
          {data && !(data.length < pagination.limit && pagination.page === 1) && <div className="d-flex justify-content-center m-4">
            <button
              onClick={() => pageHandler('prev')}
              disabled={pagination.page <= 1 || pagination.loading}
              type="button"
              className="btn btn-warning outline-0 px-4 rounded-20 mx-3 d-flex align-items-center">
                <i className="bx bx-left-arrow-circle ml-1"></i>
                Prev
            </button>
            <button
              disabled={pagination.loading || data.length < pagination.limit || !pagination.nextBtn}
              onClick={() => pageHandler('next')}
              type="button"
              className="btn btn-info outline-0 px-4 rounded-20 mx-3  d-flex align-items-center">
                Next
                <i className="bx bx-right-arrow-circle ml-1"></i>
            </button>
          </div>}
        </div>
      </div>}
      {data && data.length === 0 && <div className="col-sm-10 col-md-8">
        <p className="text-center my-5 text-muted">There is no post!</p>
      </div>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (arg) => dispatch(getPosts(arg)),
    getSearch: (arg) => dispatch(getSearch(arg)),
    getPaginate: (arg) => dispatch(getPaginate(arg)),
    setLimit: (arg) => dispatch(setPaginationLimit(arg))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)
