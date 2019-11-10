import React,{ useState, createContext, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

export const DepartmentContext = createContext()

const DepartmentContextProvider = ({children,data}) => {
  const [value,setValue] = useState([])
  console.log(data);
  useEffect(() => {
    if(data.departments){
      setValue(data.departments)
    }
  })
  return (
    <DepartmentContext.Provider value={value}>
      {children}
    </DepartmentContext.Provider>
  )
}

const query = gql`
  query{
    departments{
      id
      name
      students{ id  name  roll reg  email address department{ id  name } session{ id  year } semester{ id  name } }
      routines{
        id
        title
        session{ id year }
        semester{ id name }
        department{ id name }
        shift
        days{
          id
          dayValue
          day
          classes{
            id
            period{ id time startedAt endAt }
            mentor{ id name }
            department{ id name }
            subject{ id name code }
          }
        }
      }
    }
  }
`

export default graphql(query)(DepartmentContextProvider)
