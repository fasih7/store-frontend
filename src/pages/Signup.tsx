import { useState } from "react";
import { Button, Form, Row, Col, Card, Modal } from "react-bootstrap";
import "../styles/Signup.css";
import "../styles/ConfirmationCodeModal.css";
import { Link } from "react-router-dom";
import VerificationModal from "../components/VerificationModal";
import authService from "../domain/services/auth.service";
import InfoModel from "../shared/components/infoModal";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(true);
  //   const [newsletter, setNewsletter] = useState(false);

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
      <InfoModel
        showModal={showCodeModal}
        message="Something"
        type="success"
        handleClose={handleClose}
      />
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <Card className="bg-glass">
                <Card.Body className="px-4 py-5 px-md-5">
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

                    {/* <Form.Group className="d-flex justify-content-center mb-4">
                    <Form.Check
                      type="checkbox"
                      label="Subscribe to our newsletter"
                      checked={newsletter}
                      onChange={(e) => setNewsletter(e.target.checked)}
                    />
                  </Form.Group> */}

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 mb-4"
                    >
                      Sign up
                    </Button>

                    <div className="text-center">
                      <p>or sign up with:</p>

                      <Button variant="link" className="mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </Button>
                      <Button variant="link" className="mx-1">
                        <i className="fab fa-google"></i>
                      </Button>
                      <Button variant="link" className="mx-1">
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <Button variant="link" className="mx-1">
                        <i className="fab fa-github"></i>
                      </Button>
                    </div>

                    {/* Already have an account? Login link */}
                    <div className="text-center mt-4">
                      <p>
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary">
                          Login
                        </Link>
                      </p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* <VerificationModal
        showCodeModal={showCodeModal}
        email={email}
        handleClose={handleClose}
      /> */}
    </>
  );
};

export default Signup;
