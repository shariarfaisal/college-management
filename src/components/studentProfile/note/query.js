import { gql } from 'apollo-boost'
const query = gql`
  query Note($id: ID!){
    note(id: $id){
      id title text createdAt
    }
  }
`

export default query
