import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

type InfoModalProps = {
  showModal: boolean;
  message: string;
  type: "success" | "error";
  handleClose: () => any;
};

const InfoModel = ({
  showModal,
  message,
  type,
  handleClose,
}: InfoModalProps) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {type === "success" ? (
            <>
              <i className="fas fa-check-circle text-success me-2"></i>
              Success
            </>
          ) : (
            <>
              <i className="fas fa-exclamation-triangle text-danger me-2"></i>
              Error
            </>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className={type === "success" ? "text-success" : "text-danger"}
      >
        {message}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModel;
