import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

type InfoModalProps = {
  showModal: boolean;
  message: string;
  type: "success" | "error";
  handleClose: () => any;
  primaryButton?: { value: string; handleClick: () => any };
};

const InfoModel = ({
  showModal,
  message,
  type,
  handleClose,
  primaryButton,
}: InfoModalProps) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
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
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        {primaryButton && (
          <Button variant="primary" onClick={primaryButton.handleClick}>
            {primaryButton.value}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModel;
