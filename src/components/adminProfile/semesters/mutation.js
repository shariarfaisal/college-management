import { gql } from 'apollo-boost'
const mutation = gql`
  mutation CreateSemester($name: String!){
    createSemester(data:{
      name: $name
    }){
      id
      name
    }
  }
`

export default mutation
