import React,{ memo } from 'react'
import CloseAlert from './CloseAlert'

const Alert = ({success,error}) => {
  return (
    <>
      {success && <CloseAlert type="success">{success}</CloseAlert>}
      {error && <CloseAlert type="danger">{error}</CloseAlert>}
    </>
  )
}

export default memo(Alert)
