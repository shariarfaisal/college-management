import React,{ useContext, useState } from 'react'
import CreateRoutine from './CreateRoutine'
import {InfoContext} from '../../../store/InfoContext'
import Routine from './Routine'
import { useQuery } from '@apollo/react-hooks'
import routineQuery from './routineQuery'
import Search from './Search'
import More from './More'

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
  const [orderBy,first] = ["id_DESC",10]
  const [skip,setSkip] = useState(0)
  const variables = {...variable(args),orderBy,first,skip}
  const { data } = useQuery(routineQuery,{ variables })

  const skipper = e => setSkip(skip+first)

  return (
    <div className="py-4">
      <div className="row justify-content-center mx-auto " style={{maxWidth: "99%"}}>
        {info.departments && <CreateRoutine info={info}/>}
        <div className="col-md-10">
          {data && <div className="row justify-content-center">
            <Search search={search} setSearch={setSearch}/>
            {data.routines.map((r,i) => <Routine key={i} {...r} />)}
            <More length={data.routines.length} skipper={skipper}/>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Body
