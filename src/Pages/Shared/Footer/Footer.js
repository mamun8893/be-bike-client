import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-area">
      <Container>
        <Row>
          <Col md={4}>
            <div className="footer-left">
              <div className="logo">
                <h1>BEBIKE</h1>
              </div>
              <div className="content">
                <p>
                  We have a fully trained, experienced service department ready
                  to handle all of your bicycle service needs.We service all
                  brands of bicycles, we caontinue extended service hours.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-middle">
              <h4>Useful Link</h4>
              <ul className="footer-useful-links">
                <li>Repair Help</li>

                <li>Asset Library</li>

                <li>Wheel Spokes</li>

                <li>Repair Shop</li>

                <li>Brake Rotor</li>

                <li>Starter Tools</li>

                <li>Front Derailleur</li>

                <li>Rear Derailleur</li>

                <li>Barrel Adjusters</li>

                <li>Bicycle Wheels</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="textwidget contact-us">
                <p>Road-2, Block -3/A East Shibgonj Sylhet-3100, Bangladesh</p>
                <p>
                  <a href="mailto:support@bicyclerepair.com">
                    support@bicyclerepair.com
                  </a>
                  <a href="mailto:helpme@bicyclerepair.com">
                    helpme@bicyclerepair.com
                  </a>
                </p>
                <p>
                  <a href="tel:(+880) 0823 560 433">
                    Office: (+880) 0823 560 433
                  </a>
                  <a href="tel:(+880) 0723 161 343">
                    Cell: (+880) 0723 161 343
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright">
        <p className="copyright-text">
          Copyright © 2021, All Right Reserved - by BEBIKE
        </p>
      </div>
    </div>
  );
};

export default Footer;
