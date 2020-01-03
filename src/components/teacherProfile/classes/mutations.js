import { gql } from 'apollo-boost'

export const createAttendenceClass = gql`
  mutation CreateAttendenceClass($class: ID!,$date: String!){
    createAttendenceClass(data:{
      class: $class,
      date: $date
    }){
      id
    }
  }
`
