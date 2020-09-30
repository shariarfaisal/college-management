import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchResults = ({ results }) => {
  return(
    <div className="search-results customScrollY">
      {results.map((item,i) => {
        return (
          <Link key={i} className="item" to="/">Here would be search results...</Link>
        )
      })}
    </div>
  )
}


const SearchBar = (props) => {
  const [search,setSearch] = useState('')
  const [searchResults,setSearchResults] = useState([])

  return(
    <div className="content-search-bar">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search"
      />
    {search && <SearchResults results={searchResults} />}
    </div>
  )
}
export default SearchBar
