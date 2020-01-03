import React,{ useState } from 'react'
import useInput from '../../hooks/useInput'
import { useMutation } from '@apollo/react-hooks'
import updateAdmin from './mutations'
import query from './query'
import ChangePass from '../../teacherProfile/about/ChangePass'
import UpdatePassword from './UpdatePassword'

function Update(props) {
  const [name,bindName] = useInput(props.name)
  const [email,bindEmail] = useInput(props.email)
  const [username,bindUsername] = useInput(props.username)
  const [passMode,setPassMode] = useState(false)

  const [getUpdate,{ data, error }] = useMutation(updateAdmin,{
    variables: { name, email, username },
    refetchQueries:[{ query }]
  })

  const onSubmitHandler = async e => {
    e.preventDefault()
    if(name && email && username){
      getUpdate()
    }
  }

  return(
    <div>
      <h4 className="my-4">Update {passMode?'Password': 'Information'}</h4>
      {!passMode ? <form onSubmit={onSubmitHandler}>
        {data && <p className="text-success">Updated!</p>}
        {error && <p className="text-danger">{error.message}</p>}
        <input {...bindName} className="form-control my-2" placeholder="Name"/>
        <input {...bindEmail} className="form-control my-2" placeholder="Email"/>
        <input {...bindUsername} className="form-control my-2" placeholder="Username"/>
        <ChangePass setPassMode={setPassMode} />
        <div className="d-flex mt-5 justify-content-end align-items-center">
          <button onClick={e => props.setUpdateMode(false)} type="button" className="btn btn-sm btn-secondary mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-info mx-2">update</button>
        </div>
      </form>: <UpdatePassword setPassMode={setPassMode}/>}
    </div>
  )
}
export default Update
