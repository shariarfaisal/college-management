import React,{ useState } from 'react'
import AddNote from './AddNote'
import { useQuery } from '@apollo/react-hooks'
import query from './notesQuery'
import Search from './Search'
import Notes from './Notes'

const [first,orderBy] = [20,'id_DESC']

const Index = (props) => {
  const [skip,setSkip] = useState(0)
  const [search,setSearch] = useState('')
  const { data } = useQuery(query,{
    variables: { query: search, first, skip, orderBy}
  })

  return (
    <div>
      <Search setSearch={setSearch}/>
      <AddNote />
      {data && data.notes.length !== 0 && <Notes skip={skip} setSkip={setSkip} first={first} search={search} data={data}/>}
    </div>
  )
}



export default Index
