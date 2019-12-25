import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
  query{
    semesters{
      id name
    }
  }
`

const UpdateSemester = ({semester,setSemester}) => {
  const { data } = useQuery(query)

  return (
    <div className="col-md-6 my-2">
      <select onChange={e => setSemester(e.target.value)} value={semester} className="custom-select">
        {data && data.semesters.map((s,i) => (
          <option key={i} value={s.id}>{s.name}</option>
        ))}
      </select>
    </div>
  )
}

export default UpdateSemester
