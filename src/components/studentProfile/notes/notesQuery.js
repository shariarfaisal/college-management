import { gql } from 'apollo-boost'

const query = gql`
  query Notes($query: String,$first: Int,$skip: Int,$orderBy: String){
    notes(query: $query,first: $first,skip: $skip,orderBy: $orderBy){
      id title text createdAt
    }
  }
`

export default query
