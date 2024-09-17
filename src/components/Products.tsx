import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Products.css"; // Custom CSS for styling
import ProductCard from "./ProductCard";
import {
  getFeaturedProducts,
  getProducts,
  getRecentlyAddedProducts,
} from "../api/products-gateway";

const Products: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [recentlyAddedProducts, setRecentlyAddedProducts] = useState<any[]>([]);
  const [bestSellingProducts, setBestSellingProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const featuredProductsP = getFeaturedProducts();
      const recentlyAddedProductsP = getRecentlyAddedProducts();
      const bestSellingProductsP = getProducts({ limit: 4 });
      const [featuredProducts, recentlyAddedProducts, bestSellingProducts] =
        await Promise.all([
          featuredProductsP,
          recentlyAddedProductsP,
          bestSellingProductsP,
        ]);
      console.log(bestSellingProducts.data);

      setFeaturedProducts(featuredProducts.products);
      setRecentlyAddedProducts(recentlyAddedProducts);
      setBestSellingProducts(bestSellingProducts.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <section className="products-section">
        <Container>
          <h2 className="section-title">Featured Products</h2>
          <Row>
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Row>
        </Container>
      </section>
      <section className="products-section" style={{ backgroundColor: "#eee" }}>
        <Container>
          <h2 className="section-title">Recently Added Products</h2>
          <Row>
            {recentlyAddedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Row>
        </Container>
      </section>
      <section className="products-section">
        <Container>
          <h2 className="section-title">Best Selling Products</h2>
          <Row>
            {bestSellingProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
