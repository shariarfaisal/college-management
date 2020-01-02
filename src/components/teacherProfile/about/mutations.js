import { gql } from 'apollo-boost'

export const updateTeacher = gql`
  mutation UpdateTeacher($name: String,$email: String,$phone: String,$address: String,$position: String){
    updateTeacher(data:{
      name: $name,
      email: $email,
      phone: $phone,
      address: $address,
      position: $position
    }){
      id
    }
  }
`
export const updateTeacherPassword = gql`
  mutation UpdateTeacherPassword($oldPassword: String!,$newPassword: String!){
    updateTeacherPassword(oldPassword: $oldPassword,newPassword: $newPassword){
      id name
    }
  }
`
