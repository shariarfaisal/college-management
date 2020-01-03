import { gql } from 'apollo-boost'

export const updateNotice = gql`
  mutation UpdateNotice($id: ID!,$title: String,$text: String){
    updateNotice(id: $id,data:{
      title: $title,
      text: $text
    }){
      id
    }
  }
`
export const deleteNotice = gql`
  mutation DeleteNotice($id: ID!){
    deleteNotice(id: $id){
      id
    }
  }
`
