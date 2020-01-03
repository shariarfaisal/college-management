import React from 'react'
import CreateBook from './CreateBook'
import BookItem from './BookItem'
import { bookList } from './Query'
import { useQuery } from '@apollo/react-hooks'

const ListItem = ({ id }) => {
  const { data } = useQuery(bookList,{
    variables:{ id }
  })
  return (
    <div className="col-xl-6 my-3">
      {data && <div className="card border-0">
        <div className="card-header" data-toggle="collapse" data-target={`#collapse-${data.bookList.semester.id}`} style={{cursor: "pointer"}}>
          <p className="text-center m-0">{data.bookList.semester.name}</p>
        </div>
        <div className="card-body collapse" id={`collapse-${data.bookList.semester.id}`}>
          <CreateBook bookList={id}/>
          { data.bookList.books.map((book,i) => <BookItem key={i} i={i} {...book} bookList={id}/>) }
        </div>
      </div>}
    </div>
  )
}

export default ListItem
