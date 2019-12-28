import React,{ memo } from 'react'
import useInput from '../../hooks/useInput'

const Search = ({search,setSearch}) => {
  const [value,bindValue] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    setSearch(value)
  }

  return (
    <div className="col-12 my-2 py-3" style={{background: "rgba(222, 226, 230, 0.32)"}}>
      <form onSubmit={submitHandler}>
        <input
          className="form-control"
          {...bindValue}
          placeholder="title,session,department"
        />
      </form>
    </div>
  )
}

export default memo(Search)
