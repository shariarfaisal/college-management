import React,{ useState, createContext, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
  query{
    departments{
      id
      name
      students{ id  name  roll reg  email address department{ id  name } session{ id  year } semester{ id  name } }
    }
  }
`

// const depRoutines = gql`
//   query{
//     routines{
//       id
//       title
//       session{ id year }
//       semester{ id name }
//       department{ id name }
//       shift
//       days{
//         id
//         dayValue
//         day
//         classes{
//           id
//           period{ id time startedAt endAt }
//           mentor{ id name }
//           department{ id name }
//           subject{ id name code }
//         }
//       }
//     }
//   }
// `

export const DepartmentContext = createContext()

const DepartmentContextProvider = ({children}) => {
  const { data } = useQuery(query)
  const [value,setValue] = useState([])

  useEffect(() => {
    if(data) {
      setValue(data.departments);
    }
  },[data])

  return (
    <DepartmentContext.Provider value={value}>
      {children}
    </DepartmentContext.Provider>
  )
}

export default DepartmentContextProvider
