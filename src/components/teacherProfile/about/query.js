import { gql } from 'apollo-boost'

export const teacherQuery = gql`
  query{
    teacherMe{
      id name email phone address position classes{ id semester{ id name} day{ id day} department{ id name } period{ id time startedAt endAt } subject{ id code name }}
    }
  }
`
