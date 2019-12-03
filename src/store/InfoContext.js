import React,{ createContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

export const InfoContext = createContext()


const query = gql`
  query{
    info{
      departments{
        id
        name
        bookLists{ id probidan semester{ id name } books{ id name code }}
      }
      sessions{ id year }
      semesters{ id name routines{ id title }}
    }
  }
`



const InfoContextProvider = ({children}) => {
  const { data, /*refetch*/ } = useQuery(query)
  // const [getInfo,{ loading, data }] = useLazyQuery(query)


  return (
    <InfoContext.Provider value={data ? data.info : {}}>
      {children}
    </InfoContext.Provider>
  )
}

export default InfoContextProvider
