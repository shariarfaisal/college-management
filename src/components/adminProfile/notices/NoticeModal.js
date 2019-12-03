import React,{ useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import tcv from './timeConverter'


const NoticeModal = ({title,text,id,createdAt}) => {
  const [show,setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <>
      <li style={{cursor: 'pointer'}} onClick={handleShow} className="list-group-item list-group-item-action my-2 d-flex align-items-center">
        <p className="text-muted m-0">{title}</p>
        <small className="ml-auto">{tcv(createdAt)}</small>
      </li>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>
          <h5 className="mb-3 text-capitalize">{title}</h5>
          <p>{text}</p>
        </Modal.Body>
        <Modal.Footer>
          <small className="text-muted mr-auto">{tcv(createdAt)}</small>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NoticeModal
