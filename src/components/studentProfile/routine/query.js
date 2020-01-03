import { gql } from 'apollo-boost'
const query = gql`
  query Routines($department: String,$semester: String,$session: String,$shift: String){
    routines(department: $department,semester: $semester,session: $session,shift: $shift){
      id title shift department{ id name } semester{ id name bookLists{ id probidan books{ id name code } department{ id name }} } session{ id year } days{ id day dayValue classes{ id day{ id day} subject{ id name code } period{ id startedAt endAt time } mentor{ id name}}}

    }
  }
`

export default query
