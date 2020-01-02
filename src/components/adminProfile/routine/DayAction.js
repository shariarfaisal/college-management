import React from 'react'
import styled from 'styled-components'

const DayAction = ({ onDeleteHandler }) => {
  return (
    <Styling className="clone dropdown dropleft">
      <div id="dropdownMenuButton" data-toggle="dropdown">:</div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div className="dropdown-item" >edit</div>
        <div onClick={onDeleteHandler} className="dropdown-item" >delete</div>
      </div>
    </Styling>
  )
}

const Styling = styled.div`
  position: absolute;
  color: #363434b8;
  top: 1px;
  right: 2%;
  width: 17px;
  height: 30px;
  border-radius: 21%;
  font-size: 18px;
  background: #fdfbfb;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    color: black;
  }
  .dropdown-menu{
    min-width: 100px;
  }
`

export default DayAction
