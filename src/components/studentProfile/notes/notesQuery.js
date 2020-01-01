import { gql } from 'apollo-boost'

const query = gql`
  query{
    notes{
      id title text
    }
  }
`

export default query
