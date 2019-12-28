import React,{ useContext } from 'react'
import {InfoContext} from '../../../store/InfoContext'
import CreateBookList from './CreateBookList'
import DepartmentItem from './DepartmentItem'

const Body = (props) => {
  const info = useContext(InfoContext)

  return (
    <div style={{maxWidth: "100%"}}>
      {info.departments && <div className="row justify-content-center">
        <CreateBookList info={info}/>
        {
          info.departments.map((dep,i) => <DepartmentItem key={i} {...dep} i={i}/>)
        }
      </div>}
    </div>
  )
}



export default Body
