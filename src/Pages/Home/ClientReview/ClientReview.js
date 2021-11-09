import React from "react";
import "./client-review.css";
import reviewBg from "../../../images/client-bg.jpg";
import headerLine from "../../../images/heading-line.png";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ClientReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div
      className="client-review ic-sec-padding"
      style={{ backgroundImage: `url(${reviewBg})` }}
    >
      <Container>
        <div
          className="heading text-center"
          style={{ backgroundImage: `url(${headerLine})` }}
        >
          <h2>Client Review</h2>
        </div>
        <div className="client-review-warper">
          <Slider {...settings}>
            <div className="review-item">
              <div className="description">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet,
                  consectetur adipiscing elit magna”
                </p>
              </div>
              <div className="review-title-user">
                <div className="user">
                  <img
                    src="https://i.ibb.co/VYrwx19/feedback-photo-2.png"
                    alt="user"
                  />
                </div>
                <div className="title-rating">
                  <h4>Sam Barton</h4>
                  <span>Rating</span>
                </div>
              </div>
            </div>
            <div className="review-item">
              <div className="description">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet,
                  consectetur adipiscing elit magna”
                </p>
              </div>
              <div className="review-title-user">
                <div className="user">
                  <img
                    src="https://i.ibb.co/VYrwx19/feedback-photo-2.png"
                    alt="user"
                  />
                </div>
                <div className="title-rating">
                  <h4>Sam Barton</h4>
                  <span>Rating</span>
                </div>
              </div>
            </div>
            <div className="review-item">
              <div className="description">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet,
                  consectetur adipiscing elit magna”
                </p>
              </div>
              <div className="review-title-user">
                <div className="user">
                  <img
                    src="https://i.ibb.co/VYrwx19/feedback-photo-2.png"
                    alt="user"
                  />
                </div>
                <div className="title-rating">
                  <h4>Sam Barton</h4>
                  <span>Rating</span>
                </div>
              </div>
            </div>
            <div className="review-item">
              <div className="description">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempoinc ididunt ut magna aliqua dolor sit amet,
                  consectetur adipiscing elit magna”
                </p>
              </div>
              <div className="review-title-user">
                <div className="user">
                  <img
                    src="https://i.ibb.co/VYrwx19/feedback-photo-2.png"
                    alt="user"
                  />
                </div>
                <div className="title-rating">
                  <h4>Sam Barton</h4>
                  <span>Rating</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ClientReview;
