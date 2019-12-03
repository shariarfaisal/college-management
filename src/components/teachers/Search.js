import React from 'react'

const Search = ({search,setSearch}) => {
  return (
    <div className="row my-3 px-5">
      <input
        type="text"
        className="form-control col-md-4 col-lg-3"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search here ..."
      />
    </div>
  )
}


export default Search
