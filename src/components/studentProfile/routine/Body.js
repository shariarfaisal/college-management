import React from 'react'
import Routine from './Routine'
import useMe from '../useMe'

const Body = (props) => {
  const data = useMe()

  return (
    <div>
      {data && <Routine
                department={data.department.name}
                semester={data.semester.name}
                session={data.session.year}
                shift={data.shift}
              />}
    </div>
  )
}

export default Body
