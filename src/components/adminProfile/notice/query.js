import { gql } from 'apollo-boost'


export const noticeQuery = gql`
  query Notice($id: ID!){
    notice(id: $id){
      id title text createdAt updatedAt
    }
  }
`
