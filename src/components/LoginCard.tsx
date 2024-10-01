import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import authService from "../domain/services/auth.service";
import InfoModel from "../shared/components/infoModal";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import VerificationModal from "./VerificationModal";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("Something Went Wrong");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [primaryResendVerification, setPrimaryResendVerification] =
    useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await authService.login(email, password);

    if (response.access_token) {
      const { access_token } = response;
      login(access_token);
      navigate("/");
    }
    if (response.error) {
      const errorMessage =
        response.error.error === "pendingVerification"
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
  };

  // Function to handle resending verification email
  const handleResendVerification = async () => {
    const response = await authService.resendVerificationToken(email);
    console.log(response.success);

    if (response.success) {
      setShowCodeModal(true);
      setPrimaryResendVerification(false);
    }
    if (response.error) {
      setShowInfoModal(true);
      setErrorMessage(response.error?.message);
    }
    setShowInfoModal(false);
    setPrimaryResendVerification(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>
      <VerificationModal
        showCodeModal={showCodeModal}
        email={email}
        handleClose={() => setShowCodeModal(false)}
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
