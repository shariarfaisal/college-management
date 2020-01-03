import { gql } from 'apollo-boost'

export const createAttendenceDay = gql`
  mutation CreateAttendenceDay($date: String!){
    createAttendenceDay(data:{
      date: $date
    }){
      id date
    }
  }
`
