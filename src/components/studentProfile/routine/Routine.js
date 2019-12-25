import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import DayIn from '../../adminProfile/routine/DayIn'

const query = gql`
  query Routines($department: String,$semester: String,$session: String,$shift: String){
    routines(department: $department,semester: $semester,session: $session,shift: $shift){
      id title shift department{ id name } semester{ id name bookLists{ id probidan books{ id name code } department{ id name }} } session{ id year } days{ id day dayValue classes{ id day{ id day} subject{ id name code } period{ id startedAt endAt time } mentor{ id name}}}

    }
  }
`


const Routine = ({ department, semester, session, shift }) => {
  const { data } = useQuery(query,{
    variables: { department, semester, session, shift }
  })

  if(data){
    console.log(data);
  }


  return (
    <div className="row">
      {data && data.routines[0].days.map((d,i) => {
        return <DayIn key={i} {...d}/>
      })}
    </div>
  )
}

export default Routine
