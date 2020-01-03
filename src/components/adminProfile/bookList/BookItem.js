import React,{ useState } from 'react'
import styled from 'styled-components'
import UpdateBook from './UpdateBook'
import { useMutation } from '@apollo/react-hooks'
import { deleteBook } from './mutation'
import { bookList as query  } from './Query'

function BookItem({i,name,code,id,bookList}) {
  const [isEdit,setIsEdit] = useState(false)
  const [getDelete,{ data, error }] = useMutation(deleteBook,{
    variables:{ id },
    refetchQueries:[{ query ,variables:{ id: bookList }}]
  })
  if(error) console.log(error);

  const deleteHandler = e => {
    const res = window.confirm('Warning! Are you sure you want to delete all about this subject?')
    if(res){
      getDelete()
    }
  }

  return(
    !isEdit? <Styling className="d-flex justify-content-between">
      <p>{`${i+1}. ${name} (${code})`}</p>
      <div className="actions d-flex ">
        <small onClick={e => setIsEdit(true)} className="mx-2 text-info">edit</small>
        <small onClick={deleteHandler} className="mx-2 text-danger">delete</small>
      </div>
    </Styling>: <UpdateBook setIsEdit={setIsEdit} id={id} name={name} code={code} bookList={bookList}/>
  )
}

const Styling = styled.div`
  position: relative;
  .actions{
    visibility: hidden;
    display: none;
    small{
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  &:hover .actions{
    visibility: visible;
  }
`
export default BookItem
