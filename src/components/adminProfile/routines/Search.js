import React,{useState} from 'react'

const Search = ({search,setSearch}) => {
  const [value,setValue] = useState('')
  const submitHandler = e => {
    e.preventDefault()
    setSearch(value)
  }
  return (
    <div className="col-12 my-2 py-3" style={{background: "rgba(222, 226, 230, 0.32)"}}>
      <form onSubmit={submitHandler}>
        <input
          className="form-control"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="title,session,department"
        />
      </form>
    </div>
  )
}

export default Search
