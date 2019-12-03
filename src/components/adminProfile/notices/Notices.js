import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import NoticeModal from './NoticeModal'
import Search from './Search'


export const query = gql` query Notices($first: Int,$skip: Int,$orderBy: String,$query: String){ notices(first: $first,skip: $skip,orderBy: $orderBy,query: $query){ id title text createdAt }}`

const Notices = (props) => {
  const first = 15
  const [skip,setSkip] = useState(0)
  const orderBy = "createdAt_DESC"
  const [search,setSearch] = useState('')

  const { data } = useQuery(query,{
    variables: { first, skip, orderBy, query: search }
  })
  console.log(data);
  return (
    <div>
      <Search setSearch={setSearch}/>
      <ul className="list-group">
        {
          data && data.notices.map((n,i) => <NoticeModal key={i} {...n} />)
        }
        {data && data.notices.length > 14 && <li onClick={e => setSkip(skip+first)} className="text-muted my-2 list-group-item list-group-item-action list-group-item-info text-center" style={{cursor: 'pointer'}}>
          more
        </li>}
      </ul>
    </div>
  )
}

export default Notices
