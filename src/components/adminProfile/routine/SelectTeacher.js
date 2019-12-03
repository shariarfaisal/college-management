import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { teachersQuery } from './query'

const SelectTeacher = ({mentor,setMentor}) => {
  const { data, error }  = useQuery(teachersQuery)
  if(error){
    console.log(error);
  }
  return (
    <select onChange={e => setMentor(e.target.value)} className="m-2 custom-select" value={mentor}>
      <option value="">Select mentor</option>
      {data && data.teachers.map((t,i) => (
        <option key={i} value={t.id}>{t.name}</option>
      ))}
    </select>
  )
}

export default SelectTeacher
