import React,{ memo, useState, useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
import AddSession from './AddSession'
import AddSemester from './AddSemester'
import CreateDepartment from './CreateDepartment'
import { InfoContext } from '../../store/InfoContext'

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
    <div className="px-5">
      <div className="row justify-content-between">
        <CreateDepartment departments={departments}/>
        <AddSession sessions={sessions}/>
        <AddSemester semesters={semesters}/>
      </div>
    </div>
  )
}

export default memo(Body)
