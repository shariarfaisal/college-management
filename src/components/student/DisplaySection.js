import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'


const DisplaySection = ({children}) => {
  return (
    <Styling className="col-md-5">
      <div className="row justify-content-center">
        {children}
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  min-height: 70vh;
`

export default DisplaySection
