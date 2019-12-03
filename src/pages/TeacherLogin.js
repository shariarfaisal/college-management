import React,{ useState } from 'react'
import FormGroup from '../components/FormGroup'
import AdminLoginLayout from '../layouts/AdminLoginLayout'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'


const TeacherLogin = (props) => {
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
        if(data.loginTeacher){
          const token = `Bearer ${data.loginTeacher.token}`
          setError('')
          localStorage.setItem('teacher',token)
          // props.history.push('/')
          window.location = '/'
        }
      } catch (e) {
        setError("Unable to login!")
      }
    }
  }
  return (
    <AdminLoginLayout error={error} title="Teacher Login">
      <form onSubmit={submitHandler}>
        <FormGroup type="email" value={email} id="username" set={setEmail} plh="Email"/>
        <FormGroup type="password" value={password} id="password" set={setPassword} plh="Password"/>
        <button type="submit" className="btn btn-info py-2 px-4">
          login
        </button>
      </form>
      <p className="mt-3">Have no account yet! <a href="/register/teacher">register</a> here</p>
    </AdminLoginLayout>
  )
}

const mutation = gql`
  mutation LoginTeacher($email: String!,$password: String!){
    loginTeacher(data:{email: $email,password: $password}){
      token
    }
  }
`


export default graphql(mutation)(TeacherLogin)
