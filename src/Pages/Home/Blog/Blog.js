import React from "react";
import "./blog.css";
import headerLine from "../../../images/heading-line.png";
import blog1 from "../../../images/post-1.jpg";
import blog2 from "../../../images/post-2.jpg";
import blog3 from "../../../images/post-3.jpg";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="blog-area ic-sec-padding">
      <Container>
        <div
          className="heading text-center"
          style={{ backgroundImage: `url(${headerLine})` }}
        >
          <h2>Our Blog</h2>
        </div>
        <div className="blog-item-warper">
          <Row>
            <Col md={4}>
              <div className="blog-item">
                <div className="image">
                  <img src={blog1} className="img-fluid" alt="blog" />
                </div>
                <div className="content">
                  <h4>Basic riding techniques</h4>
                  <div class="post-meta-left">
                    <span>9 Feb, 2015 by admin</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="blog-item">
                <div className="image">
                  <img src={blog2} className="img-fluid" alt="blog" />
                </div>
                <div className="content">
                  <h4>No. 1 rule : safety first!</h4>
                  <div class="post-meta-left">
                    <span>9 Feb, 2015 by admin</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="blog-item">
                <div className="image">
                  <img src={blog3} className="img-fluid" alt="blog" />
                </div>
                <div className="content">
                  <h4>Survive long bike road trips</h4>
                  <div class="post-meta-left">
                    <span>9 Feb, 2015 by admin</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
