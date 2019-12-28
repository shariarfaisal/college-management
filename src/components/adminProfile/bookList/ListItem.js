import React from 'react'
import CreateBook from './CreateBook'

const ListItem = ({id,semester,books,i}) => (
  <div className="col-lg-6 my-3">
    <div className="card border-0">
      <div className="card-header" data-toggle="collapse" data-target={`#collapse-${semester.id}`} style={{cursor: "pointer"}}>
        <p className="text-center m-0">{semester.name}</p>
      </div>
      <div className="card-body collapse" id={`collapse-${semester.id}`}>
        <CreateBook bookList={id}/>
        { books.map((book,i) => <p key={i}>{`${i+1}. ${book.name} (${book.code})`}</p>) }
      </div>
    </div>
  </div>
)

export default ListItem
