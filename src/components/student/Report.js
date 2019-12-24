import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const attendenceQuery = gql`
  query Attendences($student: ID,$semester: ID){
    attendences(student: $student,semester: $semester){
      id class{ id class{ id subject{ id name code }}} present
    }
  }
`

const filter = (books,attendences) => {
  return books.map(i => {
    const xx = attendences.filter(a => a.class.class.subject.id === i.id)
    i.att = xx
    i.pre = xx.filter(i => i.present).length
    i.abs = xx.length - i.pre
    return i
  })
}

const percent = (a,p) => {
  const t = a+p
  return t === 0 ? 100 : (p*100)/t
}

const Report = ({ id,name, semester, bookLists }) => {
  const { data } = useQuery(attendenceQuery,{
    variables: { student: id, semester: semester.id}
  })
  const books = bookLists.find(i => i.probidan === '2016').books

  return (
    <div className="col-12 py-3 mb-5">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th className="text-center" colSpan="6">Attendence Report of {semester.name} semester</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Total</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {
            data && filter(books,data.attendences).map((b,i) => (
              <tr key={i}>
                <td>{b.code}</td>
                <td>{b.name}</td>
                <td className="text-success">{b.pre}</td>
                <td className="text-danger">{b.abs}</td>
                <td className="text-info">{b.abs+b.pre}</td>
                <td className={`${percent(b.abs,b.pre) < 75 ? 'text-danger' : 'text-success'}`}>{`${percent(b.abs,b.pre)}`}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Report
