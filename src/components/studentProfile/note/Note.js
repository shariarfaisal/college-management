import React,{ Fragment, useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import query from './query'
import { useQuery } from '@apollo/react-hooks'
import timeConverter from '../../adminProfile/notices/timeConverter'
import Actions from './Actions'
import NotFound from './NotFound'
import Update from './Update'
import GoBack from '../../adminProfile/notice/GoBack'

function Note({ id }) {
  const [isUpdate,setIsUpdate] = useState(false)
  const { data,error } = useQuery(query,{
    variables: { id }
  })

  return(
    <div>
      {data && !isUpdate && <Fragment>
        <div className="card" style={{position: 'relative'}}>
          <div className="card-body" style={{minHeight: '400px'}}>
            <h3 className="my-4">{data.note.title}</h3>
            <div>
              {ReactHtmlParser(data.note.text)}
            </div>
            <Actions id={ id } isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
          </div>
          <div className="card-footer text-muted d-flex justify-content-between">
            <small>{timeConverter(data.note.createdAt)}</small>
            <GoBack />
          </div>
        </div>
      </Fragment>}
      {data && isUpdate && <Update {...data.note} setIsUpdate={setIsUpdate}/>}
      {error && <NotFound />}
    </div>
  )
}


export default Note
