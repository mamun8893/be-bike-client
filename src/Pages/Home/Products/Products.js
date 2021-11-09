import React from "react";
import "./product.css";
import headerLine from "../../../images/heading-line.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
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
            <Col md={4}>
              <div className="product-item">
                <div className="image">
                  <img
                    src="https://i.ibb.co/X4LDfjy/bike1.png"
                    alt="bike"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <h4>Mondraker F-Podium Carbon</h4>
                  <p>
                    F-Podium 29 Stealth Air Full Carbon, XCO Optimized Zero
                    Suspension System, 100mm, XC Forward Geometry
                  </p>
                  <Link className="default-btn">Buy Now</Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="product-item">
                <div className="image">
                  <img
                    src="https://i.ibb.co/X4LDfjy/bike1.png"
                    alt="bike"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <h4>Mondraker F-Podium Carbon</h4>
                  <p>
                    F-Podium 29 Stealth Air Full Carbon, XCO Optimized Zero
                    Suspension System, 100mm, XC Forward Geometry
                  </p>
                  <Link className="default-btn">Buy Now</Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="product-item">
                <div className="image">
                  <img
                    src="https://i.ibb.co/X4LDfjy/bike1.png"
                    alt="bike"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <h4>Mondraker F-Podium Carbon</h4>
                  <p>
                    F-Podium 29 Stealth Air Full Carbon, XCO Optimized Zero
                    Suspension System, 100mm, XC Forward Geometry
                  </p>
                  <Link className="default-btn">Buy Now</Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="product-item">
                <div className="image">
                  <img
                    src="https://i.ibb.co/X4LDfjy/bike1.png"
                    alt="bike"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <h4>Mondraker F-Podium Carbon</h4>
                  <p>
                    F-Podium 29 Stealth Air Full Carbon, XCO Optimized Zero
                    Suspension System, 100mm, XC Forward Geometry
                  </p>
                  <Link className="default-btn">Buy Now</Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="product-item">
                <div className="image">
                  <img
                    src="https://i.ibb.co/X4LDfjy/bike1.png"
                    alt="bike"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <h4>Mondraker F-Podium Carbon</h4>
                  <p>
                    F-Podium 29 Stealth Air Full Carbon, XCO Optimized Zero
                    Suspension System, 100mm, XC Forward Geometry
                  </p>
                  <Link className="default-btn">Buy Now</Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="product-item">
                <div className="image">
                  <img
                    src="https://i.ibb.co/X4LDfjy/bike1.png"
                    alt="bike"
                    className="img-fluid"
                  />
                </div>
                <div className="content">
                  <h4>Mondraker F-Podium Carbon</h4>
                  <p>
                    F-Podium 29 Stealth Air Full Carbon, XCO Optimized Zero
                    Suspension System, 100mm, XC Forward Geometry
                  </p>
                  <Link className="default-btn">Buy Now</Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Products;
