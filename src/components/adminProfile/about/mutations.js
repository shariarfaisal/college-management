import { gql } from 'apollo-boost'

const updateAdmin = gql`
  mutation UpdateAdmin($name: String,$email: String,$username: String){
    updateAdmin(data:{
      name: $name,
      email: $email,
      username: $username
    }){
      id name email username
    }
  }
`

export const updateAdminPassword = gql`
  mutation UpdateAdminPassword($oldPassword: String!,$newPassword: String!){
    updateAdminPassword(oldPassword: $oldPassword,newPassword: $newPassword){
      id
    }
  }
`

export default updateAdmin
