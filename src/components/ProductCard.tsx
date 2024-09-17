import { Col, Card, Button } from "react-bootstrap";

const ProductCard = ({ product }: any) => {
  return (
    <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="product-card">
        <Card.Img
          variant="top"
          src={product.primaryImage}
          alt={product.title}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Rs: {product.price}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              style={{ backgroundColor: "#315d5c", borderColor: "gray" }}
              className="me-2 add-to-cart-btn"
            >
              Add to Cart
            </Button>
            <Button variant="secondary" className="buy-now-btn">
              Buy Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
