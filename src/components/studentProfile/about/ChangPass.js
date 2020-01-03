import React from 'react'
import styled from 'styled-components'

function ChangPass({isChangePass,setIsChangePass}) {
  return(
    <Styling className="col-12 d-flex mt-3">
      <p onClick={e => setIsChangePass(true)} className="text-info">change password</p>
    </Styling>
  )
}

const Styling = styled.div`
  p{
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`


export default ChangPass
