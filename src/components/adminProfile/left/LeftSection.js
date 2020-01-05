import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import activer from '../../activer'
import items from './items'
import Styles from './Styles'
import logout from './logout'
import { Grid } from '@material-ui/core'

const LeftSection = (props) => {
  return (
    <Grid item md={3} lg={2}>
      <Styles>
        <ul className="nav flex-column my-2">
          {activer(props,items).map((item,i) => (
            <li key={i} className="nav-item"><Link to={item.to} className={`nav-link my-2 ${item.isActive? 'active':''}`}>{item.title}</Link></li>
          ))}
          <li className="nav-item"><Link to="/" className="nav-link" onClick={e => logout(props.history)}>Logout</Link></li>
        </ul>
      </Styles>
    </Grid>
  )
}


export default withRouter(LeftSection)
