import { gql } from 'apollo-boost'

export const createAttendence = gql`
  mutation CreateAttendence($class: ID!,$student: ID!,$present: Boolean!){
    createAttendence(data:{
      class: $class,student: $student,present: $present
    }){
      id present
    }
  }
`
