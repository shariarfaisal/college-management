import React,{ useState, useContext, useEffect} from 'react'
import { StudentMeContext } from '../../../store/StudentMeContext'
import Routine from './Routine'

const Body = (props) => {
  const me = useContext(StudentMeContext)
  const [mah,setMah] = useState(null)
  useEffect(() => {
    if(me) setMah(me)
  },[me])

  return (
    <div>
      {me && <Routine
                department={me.department.name}
                semester={me.semester.name}
                session={me.session.year}
                shift={me.shift}
              />}
    </div>
  )
}

export default Body
