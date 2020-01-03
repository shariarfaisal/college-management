import { gql } from 'apollo-boost'


export const attendenceDays = gql`
  query AttendenceDays($query: String){
    attendenceDays(query: $query){ id date  }
  }
`
