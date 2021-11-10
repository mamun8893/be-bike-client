import React from "react";
import innerBannerBg from "../../images/inner-banner.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const history = useHistory();
  const { handleSignin } = useAuth();
  const onSubmit = (data) => {
    handleSignin(data.email, data.password, location, history);
  };
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
                  <input type="password" {...register("password")} />
                  <input type="submit" value="submit" className="default-btn" />
                </form>
                <p className="form-bottom-txt">
                  Do'nt Have an Account?
                  <NavLink to="/register"> Please Registration</NavLink>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Login;
