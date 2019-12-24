import React from 'react'
import Left from './Left'
import styled from 'styled-components'

const Body = ({children}) => {
  return (
    <Styling className="container">
      <div className="row justify-content-around">
        <Left />
        <div className="col-md-10 my-5">
          {children}
        </div>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  @media (min-width: 1200px){
    max-width: 1340px !important;
  }

`

export default Body
