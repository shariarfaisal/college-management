import React,{ useState,useEffect,useContext} from 'react'
import { StudentMeContext } from '../../store/StudentMeContext'
import Report from '../student/Report'

const Activity = (props) => {
  const me = useContext(StudentMeContext)
  const [data,setData] = useState(null)
  useEffect(() => {
    if(me) setData(me)
  },[me])

  return (
    <div>
      <h3 className="text-center">Activity</h3>
      {data && data.bookLists.length !== 0 && <Report {...data}/>}
    </div>
  )
}

export default Activity
