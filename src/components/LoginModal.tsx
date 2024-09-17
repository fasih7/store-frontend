import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../api/auth.gateway";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      const { access_token } = response;
      login(access_token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Button
        variant="outline-primary"
        className="ms-4 btn-signin"
        onClick={handleShow}
      >
        Login
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <div
          className="card shadow-2-strong"
          style={{ backgroundColor: "#c5c4bd" }}
        >
          <div className="card-body p-5 text-center">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
              onClick={handleClose}
            ></button>

            <h3 className="mb-5">Sign in</h3>

            <Form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-control form-control-lg"
                  />
                </Form.Group>
              </div>

              <div className="form-outline mb-4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-control form-control-lg"
                  />
                </Form.Group>
              </div>
              <Button
                variant="primary"
                size="lg"
                className="w-100"
                type="submit"
                // onClick={handleSubmit}
              >
                Login
              </Button>
            </Form>
            {/* Checkbox */}
            {/* TODO: */}
            {/* <div className="form-check d-flex justify-content-start mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label className="form-check-label" htmlFor="form1Example3">
                Remember password
              </label>
            </div> */}

            <hr className="my-4" />

            <Button
              variant="secondary"
              size="lg"
              className="w-100"
              type="submit"
              style={{ backgroundColor: "#dd4b39", marginBottom: "5px" }}
            >
              <i className="fab fa-google me-2"></i> Sign in with Google
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="w-100"
              type="submit"
              style={{ backgroundColor: "#3b5998" }}
            >
              <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;
