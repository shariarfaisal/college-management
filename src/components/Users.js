import React from 'react'
import { Link } from 'react-router-dom'
import './users.scss'

const UsersItem = () => {
  return (
    <div className="users-item">
      <Link to="/"><img className="profile" src="./img/profile.jpg" alt="Name" /></Link>
      <div className="body">
        <Link className="name" to="/">Sharia Emon Faisal</Link>
        <small className="work">Software Engineer</small>
        <Link className="posts" to="/posts">Posts</Link>
      </div>
    </div>
  )
}


const Users = (props) => {
  return(
    <div className="users-wrapper">
      <div className="users customScrollY">
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
        <UsersItem />
      </div>
    </div>
  )
}
export default Users
