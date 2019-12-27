import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
  query AttendenceDay($id: ID!){
    attendenceDay(id: $id){
      id date
      classes{
        id
        class{
          id
          day{ id day}
          semester{ id name }
          period{ id startedAt endAt }
          mentor{ id name }
          department{ id name }
          subject{ id name code}
        }
        attendences{
          id
          student{ id name roll}
          present
        }
      }
    }
  }
`

const filter = (data) => {
  return data.reduce((a,b) => {
    const dn = b.class.department.name
    if(!a[dn]){
      a[dn] = []
    }
    a[dn].push(b)
    return a
  },{})
}


const Body = ({ id }) => {
  const { data } = useQuery(query,{
    variables: { id }
  })
  if(data){
    console.log(filter(data.attendenceDay.classes));
  }
  return (
    <div className="col-12">
      <header className="py-3 mb-4 text-center text-muted">
        <h1 style={{letterSpacing: '2px'}}>Classes</h1>
        {data && <p>{data.attendenceDay.date}</p>}
      </header>
      {
        data && Object.keys(filter(data.attendenceDay.classes)).map((k,i) => {
          return (
            <div className="row justify-content-center" key={i}>
              <h3 className="text-center col-12 my-4">{k}</h3>
                {
                  filter(data.attendenceDay.classes)[k].map((a,i) => <ClassItem key={i} {...a}/>)
                }
            </div>
          )
        })
      }
    </div>
  )
}

const ClassItem = ({class:cls,attendences}) => {
  return (
    <div className="col-xl-6">
      <div className="card">
        <div className="card-body text-center">
          <p className="m-0"><strong>Semester: </strong>{cls.semester.name}</p>
          <p className="m-0"><strong>Subject: </strong>{cls.subject.name} ({cls.subject.code})</p>
          <p className="m-0"><strong>Mentor: </strong> {cls.mentor.name}</p>
        </div>
        <div className="card-footer d-flex">
          <small className="m-0 text-muted">{cls.period.startedAt} - {cls.period.endAt}</small>
          <small className="m-0 text-muted ml-auto">{cls.day.day}</small>
        </div>
      </div>
    </div>
  )
}

export default Body
