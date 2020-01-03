import React from 'react'
import useInput from '../../hooks/useInput'

const Search = ({setQuery}) => {
  const [search,bindSearch] = useInput('')

  const onSubmitHandler = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <tr>
      <th colSpan="4">
        <form onSubmit={onSubmitHandler} className="d-flex">
          <input className="form-control" {...bindSearch} placeholder="01-01-2019" />
          <button type="submit" className="btn btn-sm btn-info mx-2">submit</button>
        </form>
      </th>
    </tr>
  )
}

export default Search
