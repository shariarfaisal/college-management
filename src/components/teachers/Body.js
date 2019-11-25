import React,{ useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import TableSection from './TableSection'


const query = gql`
  query{
    teachers{
      id name email address phone
    }
  }
`

const Body = (props) => {
  const { data } = useQuery(query)
  const [skip,setSkip] = useState(0)

  return (
    <div className="py-3 mx-auto">
      <div className="row justify-content-center mx-auto" style={{maxWidth: "99%"}}>
        {data && <TableSection teachers={data.teachers} skip={skip} setSkip={setSkip}/>}
      </div>
    </div>
  )
}

export default Body
