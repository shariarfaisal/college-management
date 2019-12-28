import { gql } from 'apollo-boost'

const mutation = gql`
  mutation CreateNotice($title: String!,$text: String!){
    createNotice(data:{
      title: $title,
      text: $text
    }){
      id title text
    }
  }
`
export default mutation
