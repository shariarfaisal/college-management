import React,{ useState } from 'react'
import FormGroup from '../components/FormGroup'
import AdminLoginLayout from '../layouts/AdminLoginLayout'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { setItem } from '../components/users'

const AdminLogin = (props) => {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    if(username && password){
      try {
        const { data } = await props.mutate({
          variables:{ username, password}
        })
        if(data.loginAdmin){
          const token = `Bearer ${data.loginAdmin.token}`
          setError('')
          const res = setItem('admin',token)
          if(res){
            window.location = "/"
          }
        }
      } catch (e) {
        setError("Unable to login!")
      }
    }
  }
  return (
    <AdminLoginLayout error={error} title="Admin Login">
      <form onSubmit={submitHandler}>
        <FormGroup type="text" value={username} id="username" set={setUsername} plh="Username"/>
        <FormGroup type="password" value={password} id="password" set={setPassword} plh="Password"/>
        <button type="submit" className="btn btn-info py-2 px-4">
          login
        </button>
      </form>
    </AdminLoginLayout>
  )
}

const mutation = gql`
  mutation LoginAdmin($username: String!,$password: String!){
    loginAdmin(data:{username: $username,password: $password}){
      token
    }
  }
`


export default graphql(mutation)(AdminLogin)
