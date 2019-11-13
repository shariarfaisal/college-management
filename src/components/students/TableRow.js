import React from 'react'
import { Link } from 'react-router-dom'

const TableRow = ({roll,name,id,department,semester}) => {
  return (
    <tr>
      <th scope="row">{roll}</th>
      <td>
        <Link className="text-dark" to={`/student/${id}`}>{name}</Link>
      </td>
      <td>{department.name}</td>
      <td>{semester.name}</td>
    </tr>
  )
}

export default TableRow
