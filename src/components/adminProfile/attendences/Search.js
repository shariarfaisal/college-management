import React,{ memo } from 'react'
import Input from './Input'

const Search = ({search,setSearch}) => {
  return (
    <div className="py-3 my-3 col-md-12" style={{background: 'rgba(200,201,202,.09)'}}>
        <Input value={search} set={setSearch} plh="Search date ..." />
    </div>
  )
}

export default memo(Search)
