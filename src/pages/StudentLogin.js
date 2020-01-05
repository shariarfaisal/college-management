import React,{ useState } from 'react'
import FormGroup from '../components/FormGroup'
import AdminLoginLayout from '../layouts/AdminLoginLayout'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { setItem } from '../components/users'

const StudentLogin = (props) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    if(email && password){
      try {
        const { data } = await props.mutate({
          variables:{ email, password}
        })
        if(data.loginStudent){
          const token = `Bearer ${data.loginStudent.token}`
          setError('')
          const res = setItem('student',token)
          if(res){
            window.location = '/'
          }
        }
      } catch (e) {
        setError("Unable to login!")
      }
    }
  }
  return (
    <AdminLoginLayout error={error} title="Student Login">
      <form onSubmit={submitHandler}>
        <FormGroup type="email" value={email} id="username" set={setEmail} plh="Email"/>
        <FormGroup type="password" value={password} id="password" set={setPassword} plh="Password"/>
        <button type="submit" className="btn btn-info py-2 px-4">
          login
        </button>
      </form>
      <p className="mt-3">Have no account yet! <a href="/register/student">register</a> here</p>
    </AdminLoginLayout>
  )
}

const mutation = gql`
  mutation LoginStudent($email: String!,$password: String!){
    loginStudent(data:{email: $email,password: $password}){
      token
    }
  }
`


export default graphql(mutation)(StudentLogin)
