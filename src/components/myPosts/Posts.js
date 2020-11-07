import React,{ Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getPostsAction } from '../../store/actions/profile'
import PostItem from './PostItem'
import Filter from './Filter'
import Pagination from '../home/Pagination'

function Posts({ loading, data, error, posts, pagination, filter, getPosts }) {
  const [search,setSearch] = useState(filter.search)

  const params = {
    profileId: data.profile.id,
    limit: pagination.limit,
    page: pagination.page,
    published: filter.published,
    date: filter.date,
    search
  }

  useEffect(() => {
    getPosts(params)
  },[])

  const pageHandler = (arg) => {
    if(arg === 'next'){
      getPosts({ ...params, limit: pagination.limit, page: pagination.page + 1})
    }else if(arg === 'prev' && pagination.page > 1){
      getPosts({ ...params, limit: pagination.limit, page: pagination.page - 1})
    }
  }


  return(
    <div className="posts-wrapper row mx-0 justify-content-center">
      <Filter params={params}/>
      <div className="col-sm-10 col-md-8">
        <div className="posts">
          {posts.loading && <div style={{fontSize: '.8rem'}} className="d-flex justify-content-center">
            <span className="py-2 px-4 shadow-md bg-light text-muted"><i className="bx bx-loader bx-spin mr-1 text-info"></i>loading...</span>
          </div>}
          {posts.data && <Fragment>
            {posts.data.map(
              (post,i) => <PostItem key={i} {...post} />)
            }
            {posts.data.length === 0 && <div className="posts-item d-flex align-items-center">
              <p className="text-center my-5 text-muted">There is no post!</p>
            </div>}
            <Pagination
              {...params}
              loading={posts.loading}
              dataLength={posts.data.length}
              pageHandler={pageHandler}
              nextBtn={pagination.nextBtn}
            />
          </Fragment>}
        </div>
      </div>
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
    getPosts: (arg) => dispatch(getPostsAction(arg))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts)
