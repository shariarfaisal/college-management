import React from 'react'
import Attendences from './Attendences'
import useMe from '../useMe'

const Body = (props) => {
  const data = useMe()

  return (
    <div>
      {data && <Attendences {...data}/>}
    </div>
  )
}

export default Body
