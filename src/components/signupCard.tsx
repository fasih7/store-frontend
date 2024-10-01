import { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import authService from "../domain/services/auth.service";
import VerificationModal from "./VerificationModal";
import InfoModel from "../shared/components/infoModal";

export const SignUpCard = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [primaryResendVerification, setPrimaryResendVerification] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState("Something Went Wrong");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const handleClose = () => setShowCodeModal(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await authService.signUp({
      firstName,
      lastName,
      email,
      password,
    });

    if (response.error) {
      const errorMessage =
        response.error.error === "11000"
          ? "User with this email already exist. Try to login or use different email"
          : response.error.error === "pendingVerification"
          ? response.error.message
          : "Something went wrong";

      // If error is pending verification, show Resend button
      if (response.error.error === "pendingVerification") {
        setPrimaryResendVerification(true);
      } else {
        setPrimaryResendVerification(false);
      }

      setErrorMessage(errorMessage);
      setShowInfoModal(true);
    }
    if (response.success) setShowCodeModal(true);
  };

  // Function to handle resending verification email
  const handleResendVerification = async () => {
    const response = await authService.resendVerificationToken(email);
    if (response.success) {
      setShowCodeModal(true);
      setPrimaryResendVerification(false);
    } else setShowInfoModal(true);
    setShowInfoModal(false);
    setPrimaryResendVerification(false);
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
      <InfoModel
        showModal={showInfoModal}
        message={errorMessage}
        type="error"
        handleClose={() => setShowInfoModal(false)}
        primaryButton={
          primaryResendVerification
            ? {
                value: "Resend Verification",
                handleClick: handleResendVerification,
              }
            : undefined
        }
      />
    </>
  );
};
