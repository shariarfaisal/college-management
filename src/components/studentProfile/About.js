import React,{ useState,useEffect,useContext} from 'react'
import { StudentMeContext } from '../../store/StudentMeContext'

const About = () => {
  const me = useContext(StudentMeContext)
  const [data,setData] = useState(null)
  useEffect(() => {
    if(me) setData(me)
  },[me])

  return (
    data && <div className="jumbotron">
      <h1 className="my-4">About</h1>
      <p><strong>Name: </strong>{data.name}</p>
      <p><strong>Email: </strong>{data.email}</p>
      <p><strong>Roll: </strong>{data.roll}</p>
      <p><strong>Reg: </strong>{data.reg}</p>
      <p><strong>Address: </strong>{data.address}</p>
      <p><strong>Phone: </strong>{data.phone}</p>
      <p><strong>Department: </strong>{data.department.name}</p>
      <p><strong>Semester: </strong>{data.semester.name}</p>
      <p><strong>Shift: </strong>{data.shift}</p>
    </div>
  )
}

export default About
