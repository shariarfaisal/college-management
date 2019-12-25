import React,{ useState,useEffect,useContext} from 'react'
import { StudentMeContext } from '../../../store/StudentMeContext'
import Info from './Info'
import Update from './Update'
import { withRouter } from 'react-router-dom'

const About = (props) => {
  const [isUpdateMode,setIsUpdateMode] = useState(props.location.search.replace('?',''))
  const me = useContext(StudentMeContext)
  const [data,setData] = useState(null)
  useEffect(() => {
    if(me) setData(me)
  },[me])

  return (
    <div>
      {data && !isUpdateMode && <Info data={data} setIs={setIsUpdateMode}/>}
      {data && isUpdateMode && <Update {...data}  setIs={setIsUpdateMode}/>}
    </div>
  )
}

export default withRouter(About)
