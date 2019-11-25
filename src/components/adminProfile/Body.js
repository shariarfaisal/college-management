import React from 'react'
import styled from 'styled-components'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Semesters from './semesters/Body'
import Sessions from './sessions/Body'

const Body = ({children}) => {
  return (
    <Styles className="mx-auto">
      <div className="row">
        <LeftSection />
          <div className="col-md-6 " id="content-section">
            {children}
          </div>
        <RightSection>
          <Semesters />
          <Sessions />
        </RightSection>
      </div>
    </Styles>
  )
}

const Styles = styled.div`
  width: 80%;
`

export default Body
