import React,{ createContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const StudentMeContext = createContext()


const GET_DATA = gql`
  query{
    studentMe{
      id name email phone address roll reg shift bookLists{ id probidan books{ id name code }} department{ id name } semester{ id name } session{ id year }
    }
  }
`



const StudentMeContextProvider = ({children}) => {
  const { data } = useQuery(GET_DATA)

  return (
    <StudentMeContext.Provider value={data ? data.studentMe : null}>
      {children}
    </StudentMeContext.Provider>
  )
}

export default StudentMeContextProvider
