import React,{ createContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const TeacherMeContext = createContext()


const GET_DATA = gql`
  query{
    teacherMe{
      id name email phone address position classes{ id department{ id name } period{ id startedAt endAt } subject{ id code name }}
    }
  }
`



const TeacherMeContextProvider = ({children}) => {
  const { data, error } = useQuery(GET_DATA)
  if(error){
    console.log(error);
  }
  return (
    <TeacherMeContext.Provider value={data ? data.teacherMe : null}>
      {children}
    </TeacherMeContext.Provider>
  )
}

export default TeacherMeContextProvider
