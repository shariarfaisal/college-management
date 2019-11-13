import React,{ createContext } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useSubscription /*useLazyQuery*/ } from '@apollo/react-hooks'

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
      semesters{ id name }
    }
  }
`



const InfoContextProvider = ({children}) => {
  const { loading, error, data, refetch } = useQuery(query)
  // const [getInfo,{ loading, data }] = useLazyQuery(query)


  return (
    <InfoContext.Provider value={data ? data.info : {}}>
      {children}
    </InfoContext.Provider>
  )
}

export default InfoContextProvider
