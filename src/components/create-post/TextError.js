import React from 'react'

function TextError(props) { 
  return(
    <div className="error-msg">
      { props.children }
    </div>
  )
}
export default TextError
