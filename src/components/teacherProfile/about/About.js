import React,{ Fragment, useState } from 'react'
import useMe from '../useMe'
import Actions from './Actions'
import Infos from './Infos'
import Update from './Update'

const About = () => {
  const data = useMe()
  const [isUpdateMode,setIsUpdateMode] = useState(false)
  return (
    <div className="jumbotron" style={{position: 'relative'}}>
      {data && !isUpdateMode && <Fragment>
        <Infos {...data}/>
        <Actions setIsUpdateMode={setIsUpdateMode}/>
      </Fragment>}
      {data && isUpdateMode && <Update {...data} setIsUpdateMode={setIsUpdateMode}/>}
    </div>
  )
}



export default About
