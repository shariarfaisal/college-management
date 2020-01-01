import { gql } from 'apollo-boost'

export const createNote = gql`
  mutation CreateNote($title: String!,$text: String!){
    createNote(data:{
      title: $title,text: $text
    }){
      id title text
    }
  }
`
