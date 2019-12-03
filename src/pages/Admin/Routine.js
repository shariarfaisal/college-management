import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import Body from '../../components/adminProfile/routine/Body'

const Routine = (props) => {
  return (
    <AdminLayout>
      <div className="col-md-12">
        <Body id={props.match.params.id}/>
      </div>
    </AdminLayout>
  )
}

export default Routine
