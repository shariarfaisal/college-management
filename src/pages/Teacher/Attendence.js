import React from 'react'
import TeacherLayout from '../../layouts/TeacherLayout'
import Days from '../../components/adminProfile/attendence/Days'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
  query{
    attendenceDays{
      id date
    }
  }
`

const Attendence = (props) => {
  const { data } = useQuery(query)
  return (
    <TeacherLayout>
      <div className="row">
        {data && <Days days={data.attendenceDays}/>}
      </div>
    </TeacherLayout>
  )
}

export default Attendence
