import React,{ memo, useState } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { useSubscription } from '@apollo/react-hooks'
import CloseAlert from '../CloseAlert'

const query = gql`
  query{
    info{
      departments{ id name }
      sessions{ id year }
      semesters{ id name }
    }
  }
`

const subs = gql`
  subscription{
    session{
      mutation
      node{ id year }
    }
  }
`

const AddSession = (props) => {
  const [year,setYear] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const { data: sdata ,loading: subLoading } = useSubscription(subs)
  if(sdata && !subLoading){
    console.log(sdata);
  }

  

  const submitHandler = async e => {
    e.preventDefault()
    try {
      const {data} = await props.mutate({
        variables:{ year },
        refetchQueries: [{ query }]
      })
      if(data.createSession){
        setYear('')
        setSuccess(`New Session ${data.createSession.year} created successfully!`)
        setError('')
      }
    } catch (e) {
      setError("Session already exists!")
      setSuccess('')
    }
  }

  return (
    <div className="col-sm-10 col-md-6 col-lg-4 my-3">
      <div className="card rounded-0" style={{background:"#E9ECEF"}}>
        <div className="card-body">
          <h3 className="my-3">Add Session</h3>
          {success && <CloseAlert type="success">{success}</CloseAlert>}
          {error && <CloseAlert type="danger">{error}</CloseAlert>}
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                value={year}
                onChange={e => setYear(e.target.value)}
                placeholder="2019-20"
              />
            </div>
            <button className="btn btn-info px-3">Add</button>
          </form>
          <div className="row py-4">
            {
              props.sessions && props.sessions.map((sen,i) => {
                return <span key={i} className="text-center col bg-light text-dark py-2 px-3 m-2 rounded">{sen.year}</span>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mutation = gql`
  mutation CreateSession($year: String!){
    createSession(data:{
      year: $year
    }){
      id
      year
    }
  }
`

export default graphql(mutation)(memo(AddSession))
