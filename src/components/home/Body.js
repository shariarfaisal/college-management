import React,{ useState, useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
import { InfoContext } from '../../store/InfoContext'
import Section from './Section'


const Body = (props) => {
  const info = useContext(InfoContext)
  const [sessions,setSessions] = useState([])
  const [semesters,setSemesters] = useState([])
  const [departments,setDepartments] = useState([])

  useEffect(() =>{
    if(Object.keys(info).length !== 0){
      setSessions(info.sessions)
      setSemesters(info.semesters)
      setDepartments(info.departments)
    }
  })

  return (
    <div className="p-5">
      <div className="row justify-content-center">
        <Section name="Sessions" items={sessions}/>
        <Section name="Semesters" items={semesters} />
      </div>
    </div>
  )
}

export default React.memo(Body)
