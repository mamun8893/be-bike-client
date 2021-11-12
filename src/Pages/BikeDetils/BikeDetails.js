import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import innerBannerBg from "../../images/inner-banner.jpg";
import headerLine from "../../images/heading-line.png";
import "./bike-details.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const BikeDetails = () => {
  const { id } = useParams();
  const [bikeDeatils, setBikeDetails] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://hidden-castle-03944.herokuapp.com/bikes/${id}`)
      .then((res) => res.json())
      .then((data) => setBikeDetails(data));
  }, []);

  const onSubmit = (data) => {
    data.productName = bikeDeatils.productName;
    data.status = false;
    fetch("https://hidden-castle-03944.herokuapp.com/place-order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          reset();
          swal("Good job!", "Successfully Purchase Product", "success");
        }
      });
  };

  return (
    <div className="bike-details-area">
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${innerBannerBg})` }}
      >
        <Container>
          <div className="breadcumb-content text-center">
            <h2>Bikes Details</h2>
          </div>
        </Container>
      </div>
      {/* Bike Details Start */}
      <div className="product-details-warper ic-sec-padding">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="product-details-left">
                <img src={bikeDeatils.image} alt="" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="bike-details-right">
                <h2>{bikeDeatils.productName}</h2>
                <h4>${bikeDeatils.price}</h4>
                <p>{bikeDeatils.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Bike Details End */}

      {/* Parchase  Start */}
      <div className="bike-parchase-form ic-sec-padding">
        <div
          className="heading text-center"
          style={{ backgroundImage: `url(${headerLine})` }}
        >
          <h2>Billing Information</h2>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label>
                <input defaultValue={user.displayName} {...register("name")} />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  {...register("email")}
                />
                <label htmlFor="">Phone Number</label>
                <input type="number" {...register("phone")} />
                <label htmlFor="">City</label>
                <input type="text" {...register("city")} />
                <label htmlFor="">Address</label>
                <input type="text" {...register("address")} />
                <input type="submit" className="default-btn" value="Purchase" />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Parchase  End */}
    </div>
  );
};

export default BikeDetails;
