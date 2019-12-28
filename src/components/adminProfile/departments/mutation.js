import { gql } from 'apollo-boost'

const mutation = gql`
  mutation CreateDepartment($name: String!){
    createDepartment(data:{
      name: $name
    }){
      id
      name
    }
  }
`

export default mutation
