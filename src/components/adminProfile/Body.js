import React from 'react'
import styled from 'styled-components'
import LeftSection from './LeftSection'


const Body = ({children}) => {
  return (
    <Styles className="mx-auto">
      <div className="row">
        <LeftSection />
        <div className="col-md-9 col-lg-10">
          <div className="row">
            {children}
          </div>
        </div>
      </div>
    </Styles>
  )
}

const Styles = styled.div`
  width: 80%;
`

export default Body
