import React from 'react'
import useMe from './useMe'

const BookList = () => {
  const data = useMe()

  return (
    data && <div className="jumbotron">
      <h3 className="text-center">BookList</h3>
      <div className="row">
        {data.bookLists.map((b,i) => (
          <div key={i} className="col-md-6 p-3">
            <p className="text-muted" style={{fontSize: '20px'}}><strong>Probidan: </strong>{b.probidan}</p>
            {b.books.map((book,index) => <p key={index}><strong>{index+1}</strong>. {book.name} ({book.code})</p>)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
