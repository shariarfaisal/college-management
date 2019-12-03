import React from 'react'
import CreateNotice from './CreateNotice'
import Notices from './Notices'


const Body = (props) => {
  return (
    <div>
      <CreateNotice />
      <Notices />
    </div>
  )
}

export default Body
