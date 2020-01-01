import { gql } from 'apollo-boost'

export const attendenceQuery = gql`
  query Attendences($student: ID,$semester: ID,$orderBy: String,$skip: Int,$first: Int,$query: String){
    attendences(student: $student,semester: $semester,orderBy: $orderBy,skip: $skip,first: $first,query: $query){
      id class{ id day{ id date } class{ id period{ id startedAt endAt} subject{ id name code }}} present
    }
  }
`
