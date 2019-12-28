import { gql } from 'apollo-boost'

export const createSession = gql`
  mutation CreateSession($year: String!){
    createSession(data:{
      year: $year
    }){ id year }
  }
`
