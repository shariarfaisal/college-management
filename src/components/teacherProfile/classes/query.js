import { gql } from 'apollo-boost'

const query = gql`
  query Class($id: ID!){
    class(id: $id){
      id day{ id day}  semester{ id name } department{ id name } period{ id startedAt endAt} subject{ id name code }
      attendenceClasses{ id day{ id date }}
    }
  }
`

export default query
