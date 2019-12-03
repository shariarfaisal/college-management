import React,{ useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const CustomModal = ({children,show,setShow}) => {
  const handleClose = () => setShow(false)

  return (
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="create-notice"
        centered
      >
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default CustomModal
