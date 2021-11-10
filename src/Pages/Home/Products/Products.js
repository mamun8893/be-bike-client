import React, { useEffect, useState } from "react";
import "./product.css";
import headerLine from "../../../images/heading-line.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-area ic-sec-padding">
      <Container>
        <div
          className="heading text-center"
          style={{ backgroundImage: `url(${headerLine})` }}
        >
          <h2>Our Products</h2>
        </div>
        <div className="product-item-warper">
          <Row>
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Products;
