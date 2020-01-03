import React,{ useState } from 'react'
import useInput from '../../hooks/useInput'
import { updateTeacher } from './mutations'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import { teacherQuery } from './query'
import ChangePass from './ChangePass'
import UpdatePassword from './UpdatePassword'

function Update(props) {
  const [name,bindName] = useInput(props.name)
  const [email,bindEmail] = useInput(props.email)
  const [address,bindAddress] = useInput(props.address)
  const [phone,bindPhone] = useInput(props.phone)
  const [position,bindPosition] = useInput(props.position)
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const [passMode,setPassMode] = useState(false)

  const onSubmitHandler = async e => {
    e.preventDefault()
    if(name && email && address && phone && position){
      try{
        const data = await props.mutate({
          variables:{ name, email, address, phone, position },
          refetchQueries: [{ query: teacherQuery }]
        })

        if(data){
          setSuccess('Information Updated!')
          setError('');
        }
      }catch(err){
        setError(err.message.replace('Network error:',''))
        setSuccess('')
      }
    }
  }

  return(
    <div>
      <h4 className="my-4">Update {passMode ? 'Password' : 'Information'}</h4>
      {!passMode ? <form onSubmit={onSubmitHandler}>
        <Alert success={success} error={error} />
        <input {...bindName} className="form-control my-2" placeholder="Name"/>
        <input {...bindEmail} className="form-control my-2" placeholder="Email"/>
        <input {...bindAddress} className="form-control my-2" placeholder="Address"/>
        <input {...bindPhone} className="form-control my-2" placeholder="Phone"/>
        <input {...bindPosition} className="form-control my-2" placeholder="Position"/>
        <ChangePass setPassMode={setPassMode}/>
        <div className="d-flex mt-5 justify-content-end align-items-center">
          <button onClick={e => props.setIsUpdateMode(false)} type="button" className="btn btn-sm btn-secondary mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-info mx-2">update</button>
        </div>
      </form> : <UpdatePassword setPassMode={setPassMode}/>}
    </div>
  )
}
export default graphql(updateTeacher)(Update)
