import React,{ useState } from 'react'

const Search = ({setQuery}) => {
  const [search,setSearch] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <tr>
      <th colSpan="4">
        <form onSubmit={onSubmitHandler} className="d-flex">
          <input className="form-control" type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="01-01-2019" />
          <button type="submit" className="btn btn-sm btn-info mx-2">submit</button>
        </form>
      </th>
    </tr>
  )
}

export default Search
