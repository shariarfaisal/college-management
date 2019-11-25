import React,{ createContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery /*useLazyQuery*/ } from '@apollo/react-hooks'

export const StudentContext = createContext()


const GET_DATA = gql`
  query Students($first: Int,$skip: Int,$orderBy: String){
    students(first: $first,skip: $skip,orderBy: $orderBy){
      id
      name
      roll
      department{ id name }
      semester{ id name }
      session{ id year }
    }
  }
`



const StudentContextProvider = ({children}) => {
  const { data } = useQuery(GET_DATA,{
    variables:{ first: 20, skip: 0,orderBy: "roll_ASC"}
  })

  return (
    <StudentContext.Provider value={data ? data.students : []}>
      {children}
    </StudentContext.Provider>
  )
}

export default StudentContextProvider
