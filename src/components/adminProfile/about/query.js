import { gql } from 'apollo-boost'
const query = gql`
  query{
    admin{
      id name email username
    }
  }
`

export default query
