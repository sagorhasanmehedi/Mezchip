import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./Popup.css";

const Popup = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 text-center">
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center py-4 text-info">
        <h5>No items have selected</h5>
      </Modal.Body>

      <Modal.Footer className="border-0">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Popup;
