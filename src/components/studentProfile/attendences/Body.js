import React,{ useState,useEffect,useContext} from 'react'
import { StudentMeContext } from '../../../store/StudentMeContext'
import Attendences from './Attendences'

const Body = (props) => {
  const me = useContext(StudentMeContext)
  const [data,setData] = useState(null)

  useEffect(() => {
    if(me) setData(me)
  },[me])

  return (
    <div>
      {data && <Attendences {...data}/>}
    </div>
  )
}

export default Body
