import React from 'react'
import Report from '../student/Report'
import useMe from './useMe'

const Activity = (props) => {
  const data = useMe()

  return (
    <div>
      <h3 className="text-center">Activity</h3>
      {data && data.bookLists.length !== 0 && <Report {...data}/>}
    </div>
  )
}

export default Activity
