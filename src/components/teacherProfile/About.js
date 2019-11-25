import React,{ useState,useEffect,useContext} from 'react'
import { TeacherMeContext } from '../../store/TeacherMeContext'


const About = () => {
  const me = useContext(TeacherMeContext)
  const [data,setData] = useState(null)
  useEffect(() => {
    if(me) setData(me)
  },[me])

  return (
    data && <div className="jumbotron">
      <h1 className="my-4">About</h1>
      <p><strong>Name: </strong>{data.name}</p>
      <p><strong>Email: </strong>{data.email}</p>
      <p><strong>Address: </strong>{data.address}</p>
      <p><strong>Position: </strong>{data.position}</p>
      <p><strong>Phone: </strong>{data.phone}</p>
    </div>
  )
}

export default About
