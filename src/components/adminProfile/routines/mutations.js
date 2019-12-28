import { gql } from 'apollo-boost'

export const createRoutine = gql`
  mutation CreateRoutine($title: String!,$department: ID!,$semester: ID!, $session: ID!,$shift: String!){
    createRoutine(data:{
      title: $title,
      department: $department,
      semester: $semester,
      session: $session,
      shift: $shift
    }){
      id
      title
    }
  }
`
