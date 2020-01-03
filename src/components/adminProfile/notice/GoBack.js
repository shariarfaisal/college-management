import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

function GoBack({ history }) {
  return(
    <Styling onClick={e => history.goBack()} className="text-info">
      <span>go back</span>
    </Styling>
  )
}

const Styling = styled.div`
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`
export default withRouter(GoBack)
