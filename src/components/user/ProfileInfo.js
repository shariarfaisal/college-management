import React,{ Fragment, useState } from 'react'


const InfoItem = ({ name, value }) => (
  <div className="py-1 d-flex justify-content-between align-items-center">
    <div>{ name }</div>
    <p className="mb-0">{value? value: '---'}</p>
  </div>
)


const ProfileInfo = ({ name, email, work, address }) => {
  const [open,setOpen] = useState(false)
  return (
    <Fragment>
      {!open && <div className="d-flex align-items-center">
          <img src="../img/profile.jpg" className="rounded-circle px-2 shadow-sm" width="30px" height="30px" alt="" />
          <p style={{fontSize: '1.2rem'}} className="mb-0 mx-3">{name}</p>
          <span onClick={e => setOpen(true)} className="ml-auto">
            <i className="bx bx-chevron-down text-info"></i>
          </span>
        </div>}
      {open && <div>
        <div className="d-flex justify-content-between">
          <img src="../img/profile.jpg" width="100px" alt="" />
          <span onClick={e => setOpen(false)} className="ml-auto">
            <i className="bx bx-chevron-up text-info"></i>
          </span>
        </div>
        <div className="p-3" style={{fontSize: '1rem'}}>
          <InfoItem name="Name" value={name} />
          <InfoItem name="Email" value={email} />
          <InfoItem name="Work" value={work} />
          <div className="py-1 ">
            <div>Address</div>
            <p className="mb-0 text-muted py-2 bg-light border rounded mt-1" style={{minHeight: '3rem'}}>{address}</p>
          </div>
        </div>
      </div>}
    </Fragment>
  )
}
export default ProfileInfo
