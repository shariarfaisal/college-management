import React from 'react'
import { Link } from 'react-router-dom'

const UsersItem = ({ id, name, imageUrl, social }) => {
  const nameShorter = (name) => {
    return name.split(' ').reduce((a,b) => {
      if(a.length < 25){
        a += b+' '
      }else if(a.length === 0){
        a = b.substr(0,22)+'...'
      }
      return a
    },'')
  }
  return (
    <div className="users-item col-sm-6 col-md-3 col-lg-2 col-xl-2 p-3">
      <div className="item-content shadow p-2 bg-light">
        <div className="image"><img src="./img/user.jpg" alt="" /></div>
        <p className="mb-0 text-center name">{nameShorter(name)}</p>
        <div className="d-flex">
          <Link to={`/users/${id}`} className="btn btn-sm btn-outline-info px-4 mx-auto my-2 rounded-20" type="button">
            <i className="bx bx-user mr-1"></i>
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UsersItem
