import React from 'react'
import UsersItem from './UsersItem'
import './users.scss'
import { getUsers } from '../store/actions/user'
import { connect } from 'react-redux'


const Users = ({ users, loading }) => {
  return(
    <div className="users-wrapper">
      <div className="users customScrollY">
        {users && users.map((user,i) => <UsersItem key={i} {...user} />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: dispatch(getUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Users)
