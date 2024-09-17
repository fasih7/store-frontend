import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css'; // Custom CSS for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are a leading online store offering a wide range of products at unbeatable prices. Our mission is to provide high-quality products and exceptional customer service.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ListGroup className="footer-links">
              <ListGroupItem action href="/">Home</ListGroupItem>
              <ListGroupItem action href="/products">Products</ListGroupItem>
              <ListGroupItem action href="/about">About Us</ListGroupItem>
              <ListGroupItem action href="/contact">Contact</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="footer-title">Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-copy">© 2024 MyStore. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
