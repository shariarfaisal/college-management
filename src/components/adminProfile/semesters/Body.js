import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import Semesters from './Semesters'
import { semesterQuery } from '../queries'
import AddSemester from './AddSemester'

const Body = (props) => {
  const { data } = useQuery(semesterQuery)
  return (
    <Styles className="p-3 my-2">
      <AddSemester />
      {data && <Semesters semesters={data.semesters} />}
    </Styles>
  )
}

const Styles = styled.div`
  background: #c8c9ca17;
  width: 100%;
  max-height: "300px";
  overflow-Y: auto;
  ul{
    .nav-item{
      .nav-link{
        display: inline-block;
        border-radius: 100px;
      }
      .nav-link:hover{
        text-decoration: underline;
      }
    }
  }
`

export default Body
