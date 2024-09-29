import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart, FaUserAlt, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginModal2 from "./temp/LoginModal2";
import LoginModal from "./LoginModal";

const MyNavbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isAuthPage = location.pathname === "/sign-up";

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar sticky-top">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            src={`${process.env.PUBLIC_URL}/espar.png`}
            alt="Logo"
            style={{ height: "100%", maxHeight: "50px", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-nav">
            <Nav.Link href="/" className="nav-link-custom">
              <FaHome className="me-2" /> Home
            </Nav.Link>
            <Nav.Link href="/products" className="nav-link-custom">
              <FaShoppingCart className="me-2" /> Products
            </Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
            <Nav.Link>{user && <FaUserAlt className="me-2" />}</Nav.Link>
          </Nav>
          {!user && !isAuthPage ? (
            <LoginModal />
          ) : user ? (
            <Button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </Button>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
