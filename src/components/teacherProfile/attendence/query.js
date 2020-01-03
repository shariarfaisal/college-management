import { gql } from 'apollo-boost'

const query = gql`
  query AttendenceClass($id: ID!){
    attendenceClass(id: $id){
      id day{ id date }
      attendences{
        id student{ id name roll } present
      }
      class{
        id
        period{ id startedAt endAt} subject{ id name code }
        semester{ id name }
        department{ id name }
        day{ id routine{ id shift session{ id year}}}
      }
    }
  }
`

export const studentsQuery = gql`
  query Students($department: ID,$semester: ID,$shift: String,$session: ID,$orderBy: String){
    students(department: $department,semester: $semester,shift: $shift,session: $session,orderBy: $orderBy){
      id name roll reg
    }
  }
`

export default query
