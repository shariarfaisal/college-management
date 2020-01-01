import React from 'react'
import Search from './Search'

function Thead({ setQuery }) {
  return(
    <thead className="thead-light">
      <Search setQuery={setQuery}/>
      <tr>
        <th>Subject</th>
        <th>Date</th>
        <th>Period</th>
        <th>Attendence</th>
      </tr>
    </thead>
  )
}

export default Thead
