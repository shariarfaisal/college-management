import React from 'react'

function Search({ bindSearch }) {
  return(
    <div className="jumbotron py-3">
      <input
        {...bindSearch}
        className="form-control"
        placeholder="Search here"
      />
    </div>
  )
}

export default Search
