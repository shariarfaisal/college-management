import React,{ memo } from 'react'

const CloseAlert = ({children,type}) => {
  return (
    <div className={`alert alert-${type} fade show`} role="alert">
      {children}
    </div>
  )
}

export default memo(CloseAlert)
