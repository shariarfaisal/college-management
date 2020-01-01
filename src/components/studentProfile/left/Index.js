import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import items from './items'
import getLogout from './getLogout'
import Styles from './Styles'

const Left = (props) => {
  return (
    <Styles className="col-md-2">
      <ul className="nav flex-column my-5">
        {items.map((item,i) => (
          <li key={i} className="nav-item"><Link to={item.to} className="nav-link my-2">{item.title}</Link></li>
        ))}
        <li className="nav-item"><Link to="/" className="nav-link" onClick={e => getLogout(props.history)}>Logout</Link></li>
      </ul>
    </Styles>
  )
}


export default withRouter(Left)
