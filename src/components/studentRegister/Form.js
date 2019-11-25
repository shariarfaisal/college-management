import React,{ useState, useEffect, useContext } from 'react'
// import PropTypes from 'prop-types'
import Input from '../register/Input'
import SelectShift from '../register/SelectShift'
import Select from '../register/Select'
import SelectSession from '../register/SelectSession'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { InfoContext } from '../../store/InfoContext'

const Form = (props) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [roll,setRoll] = useState('')
  const [reg,setReg] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [shift,setShift] = useState(0)
  const [address,setAddress] = useState('')
  const [session,setSession] = useState(0)
  const [department,setDepartment] = useState(0)
  const [semester,setSemester] = useState(0)

  const [shifts,setShifts] = useState(['MORNING','DAY'])
  const [sessions,setSessions] = useState([])
  const [departments,setDepartments] = useState([])
  const [semesters,setSemesters] = useState([])

  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const info = useContext(InfoContext)

  useEffect(() => {
    if(Object.keys(info).length !== 0){
      setSessions(info.sessions)
      setSemesters(info.semesters)
      setDepartments(info.departments)
    }
  })

  const submitHandler = async e => {
    e.preventDefault()
    try{
      if(shift !== 0 && session !== 0 && department !== 0 && semester !== 0 && name && email && roll && reg && address && password && phone){
        const {data} = await props.mutate({
          variables:{
            name, email, roll, reg, address, shift, session, department, semester, phone, password
          }
        })
        const he = data.createStudent
        if(he.token){
          setName('');setEmail('');setRoll('');setReg('');setAddress('');setShift('');setSession('');setDepartment('');setSemester('');setPassword('');setPhone('');
          setError('')
          setSuccess(`Welcome ${he.student.name}! Your account created successfully.`)
        }
      }
    }catch(e){
      setError(e.message.replace('GraphQL error:',''))
      setSuccess('')
    }
  }


  return (
    <form onSubmit={submitHandler} style={{height:"100%"}}>
      <h1 className="mt-2 mb-4 text-center">Register Student Account</h1>
      { success && <div className="alert alert-success my-2">{success}</div> }
      { error && <div className="alert alert-danger my-2">{error}</div> }
      <div className="row">
        <Input value={name} set={setName} type="text" plh="Name" />
        <Input value={email} set={setEmail} type="email" plh="Email" />
        <Input value={roll} set={setRoll} type="text" plh="Roll No" />
        <Input value={reg} set={setReg} type="text" plh="Reg No" />
        <Input value={phone} set={setPhone} type="text" plh="Phone No"/>
        <Input value={address} set={setAddress} type="text" plh="Address"/>
        <SelectShift id="shift" value={shift} set={setShift} options={shifts} plh="Select Shift"/>
        <Select value={department} setValue={setDepartment} options={departments} plh="Department"/>
        <Select value={semester} setValue={setSemester} options={semesters} plh="Semester"/>
        <SelectSession session={session} setSession={setSession} sessions={sessions}/>
        <Input value={password} set={setPassword} type="password" plh="Password" />

      </div>
      <button className="btn btn-sm btn-info my-3 px-4" type="submit">Submit</button>
      <p className="my-3">Already have an account? <a href="/login/student">login</a></p>
    </form>
  )
}

const mutation = gql`
  mutation CreateStudent($name: String!,$roll: String!,$reg: String!,$phone: String!,$email: String!,$shift: String!,$address: String!,$session: ID!,$semester: ID!,$department: ID!,$password: String!){
    createStudent(data:{
      name: $name,
      roll: $roll,
      reg: $reg,
      phone: $phone,
      email: $email,
      address: $address,
      session: $session,
      semester: $semester,
      shift: $shift,
      department: $department,
      password: $password
    }){
      token
      student{
        name
      }
    }
  }

`

export default graphql(mutation)(React.memo(Form))
