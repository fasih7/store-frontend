import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/Signup.css";
import "../styles/ConfirmationCodeModal.css";
import InfoModel from "../shared/components/infoModal";
import { SignUpCard } from "../components/signupCard";
import { LoginCard } from "../components/LoginCard";

const Signup = () => {
  const [showCodeModal, setShowCodeModal] = useState(true);
  //   const [newsletter, setNewsletter] = useState(false);

  const [activeForm, setActiveForm] = useState("signup");

  const handleClose = () => setShowCodeModal(false);

  return (
    <>
      <InfoModel
        showModal={showCodeModal}
        message="Something"
        type="error"
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
                  {/* Buttons to toggle between Signup and Login */}
                  <div className="row mb-4">
                    <div className="col-6">
                      <Button
                        variant={activeForm === "signup" ? "primary" : "light"}
                        onClick={() => setActiveForm("signup")}
                        className="w-100" // This makes the button fill the column
                      >
                        Sign Up
                      </Button>
                    </div>
                    <div className="col-6">
                      <Button
                        variant={activeForm === "login" ? "primary" : "light"}
                        onClick={() => setActiveForm("login")}
                        className="w-100" // This makes the button fill the column
                      >
                        Login
                      </Button>
                    </div>
                  </div>

                  {/* Conditionally render the form based on activeForm */}
                  {activeForm === "signup" ? <SignUpCard /> : <LoginCard />}

                  <div className="text-center">
                    <p>or continue with:</p>
                    <Button variant="link" className="mx-2">
                      <i className="fab fa-facebook-f"></i>
                    </Button>
                    <Button variant="link" className="mx-1">
                      <i className="fab fa-google"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
