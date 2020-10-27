import React from 'react'
import Search from './Search'

function Filter({ setLimit, limit, limits, search, setSearch }) {
  return(
    <div className="my-3 p-2 shadow-md bg-light row mx-0 justify-content-between align-items-center">
      <div className="d-none col-sm-6 my-sm-2 d-sm-flex">

        <div className="d-flex align-items-center">
          <label style={{fontSize: '1rem'}} className="mr-2 mb-0" htmlFor="limit">limit</label>
          <select style={{width: '50px'}} className="custom-select custom-select-sm" value={limit} onChange={e => setLimit(e.target.value)}>
            {limits.map((item,i) => (
              <option key={i} value={item}>{item}</option>
            ))}
          </select>
        </div>


      </div>
      <Search search={search} setSearch={setSearch}/>
    </div>
  )
}
export default Filter
