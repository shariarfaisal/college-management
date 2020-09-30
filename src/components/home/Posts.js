import React from 'react'
import PostItem from './PostItem'
import SearchBar from './SearchBar'


const Posts = (props) => {
  return(
    <div className="content-home-posts">
      <SearchBar />
      <div className="posts">

        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />

        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />

        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />


      </div>
    </div>
  )
}
export default Posts
