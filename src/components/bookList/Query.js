import { gql } from 'apollo-boost'
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

export default query
