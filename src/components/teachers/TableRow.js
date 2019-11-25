import React from 'react'
import { Link } from 'react-router-dom'

const TableRow = ({name,id,email,phone,i}) => {
  return (
    <tr>
      <td>{i+1}</td>
      <th>
        <Link className="text-dark" to={`/teachers/${id}`}>{name}</Link>
      </th>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default TableRow
