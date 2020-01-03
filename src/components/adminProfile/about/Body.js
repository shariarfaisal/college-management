import React,{ Fragment, useState } from 'react'
import useMe from './useMe'
import Info from './Info'
import Actions from './Actions'
import Update from './Update'

function Body(props) {
  const [updateMode,setUpdateMode] = useState(false)
  const data = useMe()
  return(
    <div className="jumbotron mt-4 py-5" style={{minHeight:'300px'}}>
      {data && !updateMode && <Fragment>
        <Info {...data.admin} />
        <Actions setUpdateMode={setUpdateMode} />
      </Fragment>}
      {data && updateMode && <Update {...data.admin} setUpdateMode={setUpdateMode}/>}
    </div>
  )
}
export default Body
