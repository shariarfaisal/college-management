import React from 'react'
import Report from '../student/Report'
import useMe from './useMe'

const Activity = (props) => {
  const data = useMe()

  return (
    <div>
      {data && data.bookLists.length !== 0 && <Report {...data}/>}
    </div>
  )
}

export default Activity
