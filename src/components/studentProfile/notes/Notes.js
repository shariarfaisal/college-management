import React from 'react'
import NoteItem from './NoteItem'
import More from './More'

const Notes = ({ search, data, skip, setSkip,first }) => {
  return(
    <div className="list-group">
      {data.notes.map((d,i) => <NoteItem key={i} {...d}/>)}
      {data.notes.length === first && <More skip={skip} setSkip={setSkip} first={first} dataLength={data.notes.length}/>}
    </div>
    )
}


export default Notes
