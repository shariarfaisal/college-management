import React,{ useState,useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
import SearchSection from './SearchSection'
import TableSection from './TableSection'
import { StudentContext } from '../../store/StudentContext'



const Body = (props) => {
  const [students,setStudents] = useState([])
  const [skip,setSkip] = useState(0)
  const stdData = useContext(StudentContext)

  useEffect(() =>{ if(stdData) setStudents(stdData)},[stdData])

  return (
    <div className="py-3 mx-auto">
      <div className="row justify-content-center mx-auto" style={{maxWidth: "99%"}}>
        <SearchSection setStudents={setStudents}/>
        {<TableSection students={students} setSkip={setSkip} skip={skip}/>}
      </div>
    </div>
  )
}

export default Body
