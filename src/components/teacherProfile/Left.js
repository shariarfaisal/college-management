import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const items = [
  {title: "Home",to:"/"},
  {title: "Notifications",to:"/notifications"},
  {title: "Posts",to:"/posts"},
  {title: "Notices",to:"/notices"},
  {title: "Students",to:"/students"},
  {title: "Routine",to:"/routine"},
  {title: "About",to:"/about"},
]

const logout = (history) => {
  const sure = window.prompt('Are you sure you want to logout? yes/no')
  if(sure === 'yes' || sure === 'y'){
    localStorage.removeItem('teacher')
    window.location = '/login/teacher'
  }
}

const Left = (props) => {
  return (
    <Styles className="col-md-3">
      <ul className="nav flex-column my-5">
        {items.map((item,i) => (
          <li key={i} className="nav-item"><Link to={item.to} className="nav-link my-2">{item.title}</Link></li>
        ))}
        <li className="nav-item"><Link to="/" className="nav-link" onClick={e => logout(props.history)}>Logout</Link></li>
      </ul>
    </Styles>
  )
}

const Styles = styled.div`
  .nav{

    .nav-item{
      .nav-link{
        display: inline-block;
        color: rgb(20, 23, 26) !important;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
        overflow-wrap: break-word;
        line-height: 1.3125;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: 1px;
      }
      .nav-link:hover{
        color: black;
        background: lightblue;
        border-radius: 100px;
      }
    }
  }
`

export default withRouter(Left)
