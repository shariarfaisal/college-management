import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import Input from '../register/Input'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const Form = (props) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [address,setAddress] = useState('')
  const [position,setPosition] = useState('')

  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')


  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(name && email && address && password && phone){
        const {data} = await props.mutate({
          variables:{
            name, email, address, phone, password, position
          }
        })
        const he = data.createTeacher
        if(he.token){
          setName('');setEmail('');setAddress('');setPassword('');setPhone('');setPosition('')
          setError('')
          setSuccess(`Welcome ${he.teacher.name}! Your account created successfully.`)
        }
      }
    }catch(e){
      setError(e.message.replace('GraphQL error:',''))
      setSuccess('')
    }
  }


  return (
    <form onSubmit={submitHandler} style={{height:"100%"}}>
      <h1 className="mt-2 mb-4 text-center">Register Teacher Account</h1>
      {
        success && <div className="alert alert-success my-2">{success}</div>
      }
      {error && <div className="alert alert-danger my-2">{error}</div>}
      <div className="row">
        <Input value={name} set={setName} type="text" plh="Name" />
        <Input value={email} set={setEmail} type="email" plh="Email" />
        <Input value={phone} set={setPhone} type="text" plh="Phone No"/>
        <Input value={address} set={setAddress} type="text" plh="Address"/>
        <Input value={position} set={setPosition} type="text" plh="Position"/>
        <Input value={password} set={setPassword} type="password" plh="Password" />
      </div>
      <button className="btn btn-sm btn-info my-3 px-4" type="submit">Submit</button>
      <p className="my-3">Already have an account? <Link to="/login/teacher">login</Link></p>
    </form>
  )
}

const mutation = gql`
  mutation CreateTeacher($name: String!,$phone: String!,$email: String!,$password: String!,$position: String!,$address: String!){
    createTeacher(data:{
      name: $name,
      phone: $phone,
      email: $email,
      address: $address,
      password: $password,
      position: $position
    }){
      token
      teacher{
        name
      }
    }
  }

`

export default graphql(mutation)(React.memo(Form))
