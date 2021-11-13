import React, { useEffect, useState } from "react";
import "./client-review.css";
import reviewBg from "../../../images/client-bg.jpg";
import headerLine from "../../../images/heading-line.png";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewItem from "./ReviewItem";

const ClientReview = () => {
  const [reviews, setReviews] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    fetch("https://hidden-castle-03944.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
            {reviews.map((review) => (
              <ReviewItem key={review._id} review={review}></ReviewItem>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ClientReview;
