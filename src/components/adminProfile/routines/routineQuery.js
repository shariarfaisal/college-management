import { gql } from 'apollo-boost'

const routineQuery = gql`
  query Routines($query: String,$department: String,$semester: String,$session: String,$shift:String,$first: Int,$orderBy: String,$skip: Int){
    routines(query: $query,department: $department,semester: $semester,session: $session,shift: $shift,first: $first,orderBy: $orderBy,skip: $skip){ id title semester{ id name } session{ id year } shift department{ id name }}
  }
`

export default routineQuery
