import React from 'react'
import Attendences from './Attendences'
import useMe from '../useMe'

const Body = (props) => {
  const data = useMe()

  return (
    <div>
      <h3 className="text-center my-4">Activity</h3>
      {data && <Attendences {...data}/>}
    </div>
  )
}

export default Body
