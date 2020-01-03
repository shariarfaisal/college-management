import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import activer from '../../activer'
import items from './items'
import Styles from './Styles'
import logout from './logout'

const LeftSection = (props) => {
  return (
    <Styles className="col-md-3 col-lg-2" id="left-section">
      <ul className="nav flex-column my-2">
        {activer(props,items).map((item,i) => (
          <li key={i} className="nav-item"><Link to={item.to} className={`nav-link my-2 ${item.isActive? 'active':''}`}>{item.title}</Link></li>
        ))}
        <li className="nav-item"><Link to="/" className="nav-link" onClick={e => logout(props.history)}>Logout</Link></li>
      </ul>
    </Styles>
  )
}


export default withRouter(LeftSection)
