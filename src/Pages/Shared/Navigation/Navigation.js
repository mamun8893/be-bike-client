import React from "react";
import "./navigation.css";
import logo from "../../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="header-area">
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto menu-area">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>All Product</Nav.Link>
              <Nav.Link>Dashboard</Nav.Link>
              <Nav.Link>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
