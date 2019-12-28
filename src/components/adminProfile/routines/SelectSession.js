import React from 'react'

const SelectSession = ({session,setSession,sessions}) => {
  return (
    <div className="form-group col-md-4 col-lg-3 my-2">
      <select onChange={e => setSession(e.target.value)} className="form-control" value={session}>
        <option value="0">Select Session</option>
        {sessions.map(({id,year}) => <option key={id} value={id}>{year}</option>)}
      </select>
    </div>
  )
}

export default SelectSession
