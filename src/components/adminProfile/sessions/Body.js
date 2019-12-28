import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import styled from 'styled-components'
import { sessionQuery } from '../queries'
import Sessions from './Sessions'
import AddSession from './AddSession'

const Body = (props) => {
  const { data } = useQuery(sessionQuery)
  return (
    <Styles className="p-3 my-2">
      <AddSession />
      {data && <Sessions sessions={data.sessions} />}
    </Styles>
  )
}

const Styles = styled.div`
  background: #c8c9ca17 !important;
  width: 100%;
  max-height: 300px;
  overflow-Y: auto;
`

export default Body
