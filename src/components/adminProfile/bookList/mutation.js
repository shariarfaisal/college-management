import { gql } from 'apollo-boost'

export const createBook = gql`
  mutation CreateBook($name: String!,$code: String!,$bookList: ID!){
    createBook(data:{
      name: $name,
      code: $code,
      bookList: $bookList
    }){ id name code }
  }
`

export const createBookList = gql`
  mutation CreateBookList($probidan: String!,$department: ID!,$semester: ID!){
    createBookList(data:{
      probidan: $probidan,
      department: $department,
      semester: $semester
    }){
      id
      department{ id name }
      semester{ id name }
    }
  }

`
