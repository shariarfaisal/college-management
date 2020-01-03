import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { createAttendence } from './mutations'


const Student = ({roll,name,id,present:pre,mutate,classId}) => {
  const [present,setPresent] = useState(pre)
  const submitHandler = async (pre) => {
    try{
      const { data } = await mutate({
        variables: { class: classId, present: pre, student: id}
      })
      if(data){
        setPresent(data.createAttendence.present)
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <tr>
      <th scope="row">{roll}</th>
      <td><Link className="text-dark" to={`/student/${id}`}>{name}</Link></td>
      {present === null && <td className="d-flex">
        <button onClick={e => submitHandler(false)} className="btn btn-sm btn-danger mx-2">false</button>
        <button onClick={e => submitHandler(true)} className="btn btn-sm btn-success mx-2">true</button>
      </td>}
      {present !== null &&
        <td>
          {present && <span className="text-success">Present</span>}
          {!present && <span className="text-danger">Absent</span>}
        </td>
      }
    </tr>
  )
}

export default graphql(createAttendence)(Student)
