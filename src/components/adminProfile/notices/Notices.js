import React,{ useState, memo } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import NoticeModal from './NoticeModal'
import Search from './Search'
import query from './query'
import tcv from './timeConverter'

const [first,orderBy] = [15,'createdAt_DESC']

const Notices = (props) => {
  const [skip,setSkip] = useState(0)
  const [search,setSearch] = useState('')

  const { data } = useQuery(query,{
    variables: { first, skip, orderBy, query: search }
  })

  return (
    <div>
      <Search setSearch={setSearch}/>
      <ul className="list-group">
        {
          data && data.notices.map((n,i) => (
            <li key={i} className="list-group-item my-2 d-flex justify-content-between align-items-center">
              <Link to={`/notices/${n.id}`}>{n.title}</Link>
              <small>{tcv(n.createdAt)}</small>
            </li>
          ))
        }
        {data && data.notices.length > first &&
          <li
            onClick={e => setSkip(skip+first)}
            className="text-muted my-2 list-group-item list-group-item-action list-group-item-info text-center"
            style={{cursor: 'pointer'}}>
          more
        </li>}
      </ul>
    </div>
  )
}

export default memo(Notices)
