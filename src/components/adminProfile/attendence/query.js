import { gql } from 'apollo-boost'

export const attendenceDay = gql`
  query AttendenceDay($id: ID!){
    attendenceDay(id: $id){
      id date
      classes{
        id
        class{
          id
          day{ id day}
          semester{ id name }
          period{ id startedAt endAt }
          mentor{ id name }
          department{ id name }
          subject{ id name code}
        }
        attendences{
          id
          student{ id name roll}
          present
        }
      }
    }
  }
`
