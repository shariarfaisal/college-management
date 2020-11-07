import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

function ProfileInfo({ username, email, contact, isActive, banned, role, profile:{ name, work, address, imageUrl, social} }) {
  return(
    <div className="profile-info">
      <div className="d-flex">
        <Link to="/profile/edit" className="btn rounded-20 ml-auto px-4 shadow-md-hover text-muted"><i className="bx bx-edit mr-1"></i>Edit</Link>
      </div>
      <div className="mb-5">
        <img src="./img/profile.jpg" width="150px" alt="" />
      </div>
      <Item name="Name" value={name} />
      <Item name="Username" value={username} />
      <Item name="Email" value={email} />
      <Item name="Contact" value={contact} />
      <Item name="Work" value={work} />
      <div className="item block">
        <div className="item-name">Address</div>
        <div className="item-value small">
          There will be address of this person
        </div>
      </div>
    </div>
  )
}
export default ProfileInfo
