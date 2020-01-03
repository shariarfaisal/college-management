import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Semesters from './Semesters'
import { semesterQuery } from '../queries'
import AddSemester from './AddSemester'
import Styles from './Styles'

const Body = (props) => {
  const { data } = useQuery(semesterQuery)
  return (
    <Styles className="p-3 my-2">
      <AddSemester />
      {data && <Semesters semesters={data.semesters} />}
    </Styles>
  )
}

export default Body
