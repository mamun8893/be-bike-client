import React from "react";
import "./register.css";
import innerBannerBg from "../../images/inner-banner.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { handleCreateUser } = useAuth();
  const onSubmit = (data) => {
    handleCreateUser(data.email, data.password, data.name);
  };
  return (
    <div className="login-register">
      <div
        className="breadcumb-area"
        style={{ backgroundImage: `url(${innerBannerBg})` }}
      >
        <Container>
          <div className="breadcumb-content text-center">
            <h2>Register</h2>
          </div>
        </Container>
      </div>
      <div className="login-register-box-warper">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6} md={8}>
              <div className="title text-center">
                <h2>Register</h2>
                <p>Best place to Buy a Product</p>
              </div>
              <div className="login-register-warper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="">Full Name</label>
                  <input {...register("name")} />
                  <label htmlFor="">Email</label>
                  <input {...register("email")} />
                  <label htmlFor="">Password</label>
                  <input type="password" {...register("password")} />
                  <input type="submit" value="submit" className="default-btn" />
                </form>
                <p className="form-bottom-txt">
                  Alreday Have an Account?
                  <NavLink to="/login"> Please Login</NavLink>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Register;
