import React,{ useState, memo } from 'react'
import useInput from '../../hooks/useInput'
import { updateDepartment } from './mutation'
import { graphql } from 'react-apollo'
import Alert from '../../Alert'
import { depQuery } from '../queries'

function Update(props) {
  const [name,bindName] = useInput(props.name)
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const onSubmitHandler = async e => {
    e.preventDefault()
    if(name){
      try{
        const { data } = await props.mutate({
          variables: { id: props.id, name },
          refetchQueries:[{ query: depQuery }]
        })
        if(data){
          setSuccess('Name Updated!')
          setError('')
        }
      }catch(err){
        setError(err.message)
        setSuccess('')
      }
    }
  }

  return(
    <div>
      <h4 className="mb-3">Update Name</h4>
      <form onSubmit={onSubmitHandler}>
        <Alert success={success} error={error} />
        <input {...bindName} className="form-control" required />
        <div className="d-flex justify-content-end align-items-center mt-4">
          <button onClick={e => props.setIsUpdateMode(false)} type="button" className="btn btn-sm btn-secondary mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-info mx-2">save</button>
        </div>
      </form>
    </div>
  )
}
export default graphql(updateDepartment)(memo(Update))
