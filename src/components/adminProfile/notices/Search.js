import React,{ memo } from 'react'
import useInput from '../../hooks/useInput'

const Search = ({setSearch}) => {
  const [query,bindQuery] = useInput()

  const submitHandler = e => {
    e.preventDefault()
    setSearch(query)
  }

  return (
    <div className="py-2"style={{background: "rgba(200,201,202,0.1)"}} >
      <form onSubmit={submitHandler} className="d-flex justify-content-center">
        <input
          {...bindQuery}
          placeholder="Search"
          className="form-control m-2"
        />
        <button type="submit" className="btn btn-info m-2">search</button>
      </form>
    </div>
  )
}

export default memo(Search)
