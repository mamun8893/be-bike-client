import React from "react";
import innerBannerBg from "../../images/inner-banner.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login-register">
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${innerBannerBg})` }}
      >
        <Container>
          <div className="breadcumb-content text-center">
            <h2>Login</h2>
          </div>
        </Container>
      </div>
      <div className="login-register-box-warper">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="title text-center">
                <h2>Login</h2>
                <p>Best place to Buy a Product</p>
              </div>
              <div className="login-register-warper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="">Email</label>
                  <input {...register("email")} />
                  <label htmlFor="">Password</label>
                  <input {...register("password")} />
                  <input type="submit" value="submit" className="default-btn" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
