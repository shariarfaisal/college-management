import React,{ useState } from 'react'

function Search({ setSearch }) {
  const [query,setQuery] = useState('')

  const onKyUp = e => {
    if(e.keyCode === 13){
      setSearch(query)
    }
  }

  return(
    <div className="jumbotron py-3">
      <input
        type="text"
        value={query}
        onKeyDown={onKyUp}
        onChange={e => setQuery(e.target.value)}
        className="form-control"
        placeholder="Search here"
      />
    </div>
  )
}

export default Search
