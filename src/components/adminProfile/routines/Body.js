import React,{ useContext, useState } from 'react'
import CreateRoutine from './CreateRoutine'
import {InfoContext} from '../../../store/InfoContext'
import Routine from './Routine'
import { useQuery } from '@apollo/react-hooks'
import routineQuery from './routineQuery'
import Search from './Search'

const variable = (args) => {
  const v = {}
  if(args[0]) v.query =  args[0]
  if(args[1]) v.session = args[1]
  if(args[2]) v.department = args[2]
  return v
}
const Body = (props) => {
  const [search,setSearch] = useState('')
  const info = useContext(InfoContext)
  const args = search.split(',')
  const orderBy = "id_DESC"
  const first = 10
  const [skip,setSkip] = useState(0)
  const variables = {...variable(args),orderBy,first,skip}
  const { data } = useQuery(routineQuery,{ variables })

  const skipper = e => {
    setSkip(skip+first)
  }

  return (
    <div className="py-4">
      <div className="row justify-content-center mx-auto " style={{maxWidth: "99%"}}>
        {info.departments && <CreateRoutine info={info}/>}
        <div className="col-md-10">
          <div className="row justify-content-center">
            <Search search={search} setSearch={setSearch}/>
            {data && data.routines.map((r,i) => {
              return <Routine key={i} {...r} />
            })}
            {data && data.routines.length > 9 && <div onClick={skipper} className="col-12 py-2 my-3 text-center" style={{background: "rgba(184, 192, 199, 0.32)",cursor: 'pointer'}}>
              <strong>more</strong>
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
