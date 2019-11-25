import React,{ useContext } from 'react'
import StudentLayout from '../../layouts/StudentLayout'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import BatchMatesSection from '../../components/studentProfile/BatchMates'
import { StudentMeContext } from '../../store/StudentMeContext'

const query = gql`
  query Students($session: ID){
    students(session: $session){
      id name email roll reg shift department{ id name } semester{ id name } phone address session{ id year }
    }
  }
`

const BatchMates = (props) => {
  const me = useContext(StudentMeContext)
  const { data } = useQuery(query,{
    variables:{ session: me ? me.session.id : ""}
  })
  return (
    <StudentLayout>
      {data && <BatchMatesSection data={data}/>}
    </StudentLayout>
  )
}

export default BatchMates
