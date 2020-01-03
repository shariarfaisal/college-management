import React from 'react'
import styled from 'styled-components'

function Actions({ setUpdateMode }) {
  return(
    <Styling id="actions" className="clone dropdown dropleft">
      <div id="dropdownMenuButton" data-toggle="dropdown">:</div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div onClick={e => setUpdateMode(true)} className="dropdown-item" >edit</div>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  position: absolute;
  color: #363434b8;
  top: 70px;
  right: 5%;
  width: 20px;
  height: 30px;
  border-radius: 21%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background: #fffefe;
    color: black;
  }
  .dropdown-menu{
    min-width: 100px;
  }
`

export default Actions
