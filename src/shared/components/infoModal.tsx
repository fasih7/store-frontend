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
  //   const handleLogin = async () => {
  //     try {
  //       const response = await fetch('/api/login', { /* login logic */ });

  //       if (response.ok) {
  //         setModalMessage('Login successful!');
  //         setModalType('success');
  //       } else {
  //         throw new Error('Login failed');
  //       }
  //     } catch (err) {
  //       setModalMessage(err.message || 'Something went wrong!');
  //       setModalType('error');
  //     }
  //     setShowModal(true);
  //   };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{type === "success" ? "Success" : "Error"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModel;
