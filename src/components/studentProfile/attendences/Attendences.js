import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Search from './Search'


const attendenceQuery = gql`
  query Attendences($student: ID,$semester: ID,$orderBy: String,$skip: Int,$first: Int,$query: String){
    attendences(student: $student,semester: $semester,orderBy: $orderBy,skip: $skip,first: $first,query: $query){
      id class{ id day{ id date } class{ id period{ id startedAt endAt} subject{ id name code }}} present
    }
  }
`

const Attendences = ({id,semester}) => {
  const [skip,setSkip] = useState(0)
  const [first,setFirst] = useState(20)
  const [query,setQuery] = useState('')

  const { data } = useQuery(attendenceQuery,{
    variables: { student: id, semester: semester.id,orderBy: 'createdAt_DESC',skip,first,query}
  })

  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <Search setQuery={setQuery}/>
          <tr>
            <th>Subject</th>
            <th>Date</th>
            <th>Period</th>
            <th>Attendence</th>
          </tr>
        </thead>
        <tbody>
          {data && data.attendences.map((a,i) => (
            <tr key={i}>
              <td>{a.class.class.subject.name}</td>
              <td>{a.class.day.date}</td>
              <td>{a.class.class.period.startedAt} - {a.class.class.period.endAt}</td>
              <td>
                {a.present && <span className="text-success">Present</span>}
                {!a.present && <span className="text-danger">Absent</span>}
              </td>
            </tr>
          ))}
          <tr>
            {data && data.attendences.length > 19 && <td onClick={e => {if(!(data.attendences.length > 19)){setSkip(0)}}} colSpan="4" className="text-center text-muted"><span style={{fontWeight: '700',cursor: 'pointer'}}>more</span></td>}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Attendences
