import { gql } from 'apollo-boost'

export const updateStudent = gql`
  mutation UpdateStudent($name: String,$email: String,$phone: String,$address: String,$semester: ID){
    updateStudent(data:{
      name: $name,email: $email,phone: $phone,address: $address,semester: $semester
    }){
      id
    }
  }
`

export const updateStudentPassword = gql`
  mutation UpdateStudentPassword($oldPassword: String!,$newPassword: String!){
    updateStudentPassword(oldPassword: $oldPassword,newPassword: $newPassword){
      id name
    }
  }
`
