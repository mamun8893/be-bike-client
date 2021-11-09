import React from "react";
import "./banner.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import bannerBg from "../../../images/banner-bg.png";

const Banner = () => {
  return (
    <div
      className="banner-area"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <Container>
        <Row>
          <Col lg={8}>
            <div className="banner-content">
              <h1>Best Bikes For You</h1>
              <p>The ultimate cycling experience for riders of all types.</p>
              <p>Building better bikes, building better lives</p>
              <Button className="default-btn">Buy Now</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
