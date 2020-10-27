import React from 'react'
import Item from './Item'

function ProfileInfo({ username, email, contact, isActive, banned, role, profile:{ name, work, address, imageUrl, social} }) {
  return(
    <div className="profile-info">
      <div className="d-flex">
        <button className="btn-primary ml-auto px-4" type="button">Edit</button>
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
