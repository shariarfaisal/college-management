import React from 'react'
import { Link } from 'react-router-dom'
import timeConverter from '../../adminProfile/notices/timeConverter'

const NoteItem = ({ id, title, createdAt }) => (
  <div className="list-group-item my-2 d-flex justify-content-between align-items-center">
    <h4><Link className="text-dark" to={`/note/${id}`}>
      {title}
    </Link></h4>
    <small>{timeConverter(createdAt)}</small>
  </div>
)


export default NoteItem
