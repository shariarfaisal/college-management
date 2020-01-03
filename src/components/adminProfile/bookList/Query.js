import { gql } from 'apollo-boost'
const query = gql`
  query{
    info{
      departments{
        id
        name
        bookLists{ id }
      }
      sessions{ id year }
      semesters{ id name routines{ id title }}
    }
  }
`

export const bookList = gql`
  query BookList($id: ID!){
    bookList(id: $id){
      id probidan semester{ id name } books{ id name code }
    }
  }
`

export default query
