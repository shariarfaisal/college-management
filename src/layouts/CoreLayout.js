import React from 'react'
import styled from 'styled-components'
// import DepartmentContextProvider from '../store/DepartmentContext'

const CoreLayout = ({children}) => {
  return (
      <CoreLayoutStyle className="bg-light">
        { children }
      </CoreLayoutStyle>
  )
}

const CoreLayoutStyle = styled.div`
  min-height: 100vh;
  box-sizing: border-box;

`

export default CoreLayout
