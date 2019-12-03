import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import TableSection from './TableSection'
import Search from './Search'

const query = gql`
  query{
    teachers{
      id name email address phone
    }
  }
`

const Body = (props) => {
  const { data } = useQuery(query)
  const [search,setSearch] = useState('')
  const [skip,setSkip] = useState(0)

  return (
    <div className="py-3 mx-auto">
      <Search search={search} setSearch={setSearch}/>
      <div className="row justify-content-center mx-auto">
        {data && <TableSection teachers={data.teachers} skip={skip} setSkip={setSkip} search={search}/>}
      </div>
    </div>
  )
}

export default Body
