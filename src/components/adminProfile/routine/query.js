import { gql } from 'apollo-boost'

const query = gql`
  query Routine($id: ID!){
    routine(id: $id){
      id title shift department{ id name } semester{ id name bookLists{ id probidan books{ id name code } department{ id name }} } session{ id year } days{ id day dayValue classes{ id day{ id day } subject{ id name code } period{ id startedAt endAt time } mentor{ id name}}}

    }
  }
`

export const periodsQuery = gql`
  query{
    periods{ id time startedAt endAt }
  }
`

export const teachersQuery = gql`
  query{
    teachers{ id name }
  }
`

export default query
