import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import authService from "../domain/services/auth.service";

export const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await authService.login(email, password);
    if (response.success || response.error) setShowCodeModal(true);
  };

  return (
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
  );
};
