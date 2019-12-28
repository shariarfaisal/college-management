import React,{ useState, memo } from 'react'
import { useQuery } from '@apollo/react-hooks'
import NoticeModal from './NoticeModal'
import Search from './Search'
import query from './query'

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
          data && data.notices.map((n,i) => <NoticeModal key={i} {...n} />)
        }
        {data && data.notices.length > 14 &&
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
