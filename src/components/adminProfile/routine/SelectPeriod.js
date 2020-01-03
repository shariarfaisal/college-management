import React,{ memo } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { periodsQuery } from './query'

const SelectPeriod = ({period,setPeriod}) => {
  const { data }  = useQuery(periodsQuery)
  return (
    <select onChange={e => setPeriod(e.target.value)} className="m-2 custom-select" value={period}>
      <option value="">Select period</option>
      {data && data.periods.map((p,i) => (
        <option key={i} value={p.id}>{`${p.startedAt} - ${p.endAt}`}</option>
      ))}
    </select>
  )
}

export default memo(SelectPeriod)
