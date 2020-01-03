import React,{ Fragment, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { noticeQuery } from './query'
import tcv from '../notices/timeConverter'
import Actions from './Actions'
import Update from './Update'

function Notice({ id }) {
  const [updateMode,setUpdateMode] = useState(false)
  const { data, error } = useQuery(noticeQuery,{
    variables: { id }
  })
  return(
    <div className="mt-4">
      {data && <div className="card" style={{position: 'relative'}}>
        {!updateMode &&<div className="card-body" style={{minHeight: '400px'}}>
            <h3 className="card-title">{data.notice.title}</h3>
            <p>{data.notice.text}</p>
            <Actions setUpdateMode={setUpdateMode} id={data.notice.id}/>
          </div>}
          {updateMode && <Update setUpdateMode={setUpdateMode} {...data.notice}/>}
          <div className="card-footer">
            <small className="text-muted">{tcv(data.notice.createdAt)}</small>
            <small className="text-muted ml-3">{tcv(data.notice.updatedAt) === tcv(data.notice.createdAt) ? '' : 'edited '+tcv(data.notice.updatedAt)}</small>
          </div>
      </div>}
      {error && <div className="jumbotron"><h1 className="text-center">Not Found</h1></div>}
    </div>
  )
}
export default Notice
