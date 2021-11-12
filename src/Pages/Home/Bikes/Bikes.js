import React, { useEffect, useState } from "react";
import "./product.css";
import headerLine from "../../../images/heading-line.png";
import { Container, Row } from "react-bootstrap";
import Bike from "./Bike";

const Bikes = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://hidden-castle-03944.herokuapp.com/bikes")
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
              <Bike key={product._id} product={product}></Bike>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Bikes;
