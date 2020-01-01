import React from 'react'
import AddNote from './AddNote'
import { useQuery } from '@apollo/react-hooks'
import query from './notesQuery'
import searchFilter from './searchFilter'
import NoteItem from './NoteItem'
import Search from './Search'
import useInput from '../../hooks/useInput'

const Notes = (props) => {
  const { data } = useQuery(query)
  const [search,bindSearch] = useInput('')

  return (
    <div>
      <Search bindSearch={bindSearch}/>
      <div className="p-3 mb-4">
        <h3 className="my-2 text-info" data-toggle="collapse" data-target="#collapse-note" style={{cursor: "pointer"}}>Add Note +</h3>
        <AddNote />
      </div>
      <div className="row">
        {
          data && searchFilter(data.notes,search).map((d,i) => <NoteItem key={i} {...d}/>)
        }
      </div>
    </div>
  )
}



export default Notes
