import { gql } from 'apollo-boost'

export const deleteNote = gql`
  mutation DeleteNote($id: ID!){
    deleteNote(id: $id){
      id title text
    }
  }
`
export const updateNote = gql`
  mutation UpdateNote($id: ID!,$title: String,$text: String){
    updateNote(id: $id,data:{
      title: $title,
      text: $text
    }){
      id title text
    }
  }
`
