import { gql } from 'apollo-boost'
const studentQuery = gql`
  query{
    studentMe{
      id name email phone address roll reg shift
      bookLists{ id probidan books{ id name code }}
      department{ id name }
      semester{ id name }
      session{ id year }
    }
  }
`

export default studentQuery
