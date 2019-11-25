import React,{ useContext,useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import DepartmentItem from './DepartmentItem'
import AddDepartment from './AddDepartment'
import { depQuery } from '../queries'

const Body = (props) => {
  const { data } = useQuery(depQuery)

  return (
    <div className="row">
      <AddDepartment />
      {data && data.departments.map((d,i) => <DepartmentItem key={i} {...d} />)}
    </div>
  )
}

export default Body
