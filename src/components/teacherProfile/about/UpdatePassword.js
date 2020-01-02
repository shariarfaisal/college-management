import React,{ useState } from 'react'
import useInput from '../../hooks/useInput'
import { updateTeacherPassword } from './mutations'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'

function UpdatePassword({ setPassMode, mutate }) {
  const [oldPassword,bindOldPassword,resetOldPassword] = useInput('','password')
  const [newPassword,bindNewPassword,resetNewPassword] = useInput('','password')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const onSubmitHandler = async e => {
    e.preventDefault()
    if(oldPassword && newPassword){
      try{
        const { data } = await mutate({
          variables: { oldPassword, newPassword }
        })
        if(data){
          setSuccess('Password updated!')
          setError('')
          resetOldPassword();resetNewPassword()
        }
      }catch(err){
        setError(err.message.replace('GraphQL error: ',''))
        setSuccess('')
      }
    }
  }


  return(
    <div className="my-5">
      <form onSubmit={onSubmitHandler}>
        <Alert success={success} error={error} />
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password</label>
          <input id="oldPassword" {...bindOldPassword} className="form-control" placeholder="Old Password" />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input id="newPassword" {...bindNewPassword} className="form-control" placeholder="New Password" />
        </div>
        <div className="d-flex justify-content-end mt-5">
          <button onClick={e => setPassMode(false)} type="button" className="btn btn-sm btn-secondary mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-info mx-2">submit</button>
        </div>
      </form>
    </div>
  )
}
export default graphql(updateTeacherPassword)(UpdatePassword)
