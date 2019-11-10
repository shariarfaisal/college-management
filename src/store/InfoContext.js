import React,{ useState, createContext, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

export const InfoContext = createContext()

const InfoContextProvider = ({children,data}) => {
  const [value,setValue] = useState({})

  useEffect(() => {
    if(!data.loading){
      setValue(data.info)
    }
  })

  return (
    <InfoContext.Provider value={value}>
      {children}
    </InfoContext.Provider>
  )
}

const query = gql`
  query{
    info{
      departments{ id name }
      sessions{ id year }
      semesters{ id name }
    }
  }
`

export default graphql(query)(InfoContextProvider)
