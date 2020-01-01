import React,{ useState } from 'react'
import Info from './Info'
import Update from './Update'
import { withRouter } from 'react-router-dom'
import useMe from '../useMe'

const About = (props) => {
  const [isUpdateMode,setIsUpdateMode] = useState(props.location.search.replace('?',''))
  const data = useMe()

  return (
    data && <div>
      { !isUpdateMode && <Info data={data} setIs={setIsUpdateMode}/>}
      {isUpdateMode && <Update {...data}  setIs={setIsUpdateMode}/>}
    </div>
  )
}

export default withRouter(About)
