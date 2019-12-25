import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import styled from 'styled-components'
import Input from '../../register/Input'
import UpdateSemester from './UpdateSemester'
import studentQuery from './studentQuery'
import { withRouter } from 'react-router-dom'

const Update = (props) => {
  const [name,setName] = useState(props.name)
  const [email,setEmail] = useState(props.email)
  const [phone,setPhone] = useState(props.phone)
  const [address,setAddress] = useState(props.address)
  const [semester,setSemester] = useState(props.semester.id)
  const [oldPassword,setOldPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const onSubmitHandler = async e => {
    e.preventDefault ()
    try{
      if(name && email && phone && address && semester){
        const { data } = await props.mutate({
          variables:{ name, email, phone, address, semester },
          refetchQueries: [{ query: studentQuery }]
        })
        if(data){
          setSuccess('Information updated!')
          setError('')
        }
      }
    }catch(err){
      setError(err.message.replace('GraphQL error: ',''))
    }
  }

  return (
    <Styling className="jumbotron">
      <h3>Update Your Information</h3>
      {success && <p className="text-center text-success">{success}</p>}
      {error && <p className="text-center text-success">{error}</p>}
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <Input value={name} set={setName} plh="Name" type="text"/>
          <Input value={email} set={setEmail} plh="Email" type="email"/>
          <Input value={phone} set={setPhone} plh="Phone" type="text"/>
          <Input value={address} set={setAddress} plh="Address" type="text"/>
          <UpdateSemester semester={semester} setSemester={setSemester}/>
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button onClick={e => props.setIs(false)} className="btn btn-sm btn-secondary mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-info mx-2">save</button>
        </div>
      </form>
    </Styling>
  )
}

const Styling = styled.div`
  transition: .3s;
`

const mutation = gql`
  mutation UpdateStudent($name: String,$email: String,$phone: String,$address: String,$semester: ID){
    updateStudent(data:{
      name: $name,email: $email,phone: $phone,address: $address,semester: $semester
    }){
      id
    }
  }
`
export default graphql(mutation)(withRouter(Update))
