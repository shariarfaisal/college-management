import React from 'react'

const NoteItem = ({id,title,text}) => (
  <div className="col-12 jumbotron py-2">
    <h4 style={{cursor: 'pointer'}} className="my-2" data-toggle="collapse" data-target={`#note-${id}`}>{title}</h4>
    <p className="collapse lead" id={`note-${id}`}>{text}</p>
  </div>
)


export default NoteItem
