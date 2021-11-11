import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import innerBannerBg from "../../images/inner-banner.jpg";
import headerLine from "../../images/heading-line.png";
import Bike from "../Home/Bikes/Bike";

const AllBike = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="all-bike-area">
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${innerBannerBg})` }}
      >
        <Container>
          <div className="breadcumb-content text-center">
            <h2>All Bikes</h2>
          </div>
        </Container>
      </div>
      <div className="all-product-warper ic-sec-padding">
        <Container>
          <div
            className="heading text-center"
            style={{ backgroundImage: `url(${headerLine})` }}
          >
            <h2>Our Products</h2>
          </div>
          <div className="product-item-warper">
            <Row>
              {products.map((product) => (
                <Bike key={product._id} product={product}></Bike>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AllBike;
