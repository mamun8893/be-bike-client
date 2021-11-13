import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Bike = (props) => {
  const { _id, productName, image, price, description } = props.product;
  return (
    <Col lg={4} md={6}>
      <div className="product-item">
        <div className="image">
          <img src={image} alt="bike" className="img-fluid" />
        </div>
        <div className="content">
          <h4>{productName}</h4>
          <h5>${price}</h5>
          <p>{description.slice(0, 100)}</p>

          <Link className="default-btn" to={`/bike-details/${_id}`}>
            Buy Now
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default Bike;
