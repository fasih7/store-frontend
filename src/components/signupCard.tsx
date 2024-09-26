import { useState } from "react";
import { Button, Form, Row, Col, Card, Modal } from "react-bootstrap";
import authService from "../domain/services/auth.service";
import VerificationModal from "./VerificationModal";

export const SignUpCard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showCodeModal, setShowCodeModal] = useState(true);

  const handleClose = () => setShowCodeModal(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await authService.signUp({
      firstName,
      lastName,
      email,
      password,
    });
    if (response.success || response.error) setShowCodeModal(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mb-4">
            <Form.Group controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-4">
            <Form.Group controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mb-4">
          Sign up
        </Button>
      </Form>
      <VerificationModal
        showCodeModal={showCodeModal}
        email={email}
        handleClose={handleClose}
      />
    </>
  );
};
