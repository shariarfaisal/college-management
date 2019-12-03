import React from 'react'
// import PropTypes from 'prop-types'
import CreateBook from './CreateBook'

const ListItem = ({id,semester,books,i}) => (
  <div className="col-md-6 col-xl-4 my-3">
    <div className="card">
      <div className="card-header" data-toggle="collapse" data-target={`#collapse-${semester.id}`} style={{cursor: "pointer"}}>
        <p className="text-center m-0">{semester.name}</p>
      </div>
      <div className={`card-body collapse ${i === 0 ? 'show' : ''}`} id={`collapse-${semester.id}`}>
        <CreateBook bookList={id}/>
        {
          books.map((book,i) => (
            <p key={i}>{`${i+1}. ${book.name} (${book.code})`}</p>
          ))
        }
      </div>
    </div>
  </div>
)

export default ListItem
