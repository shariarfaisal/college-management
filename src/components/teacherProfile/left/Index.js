import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Styles from './Styles'
import items from './Items'
import logout from './logout'
import activer from '../../activer'

const Index = (props) => {
  return (
    <Styles className="col-md-3">
      <ul className="nav flex-column my-5">
        {activer(props,items).map((item,i) => (
          <li key={i} className="nav-item"><Link to={item.to} className={`nav-link my-2 ${item.isActive ? 'active' : ''}`}>{item.title}</Link></li>
        ))}
        <li className="nav-item"><Link to="/" className="nav-link" onClick={e => logout(props.history)}>Logout</Link></li>
      </ul>
    </Styles>
  )
}


export default withRouter(Index)
