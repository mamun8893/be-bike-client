import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewItem = (props) => {
  const { userName, rating, description, image } = props.review;

  return (
    <div className="review-item">
      <div className="description">
        <p>{description.slice(0, 140)}</p>
      </div>
      <div className="review-title-user">
        <div className="user">
          <img src={image} alt="user" />
        </div>
        <div className="title-rating">
          <h4>{userName}</h4>
          <Rating
            emptySymbol={<AiOutlineStar className="outline-star" />}
            fullSymbol={<AiFillStar className="fill-star" />}
            initialRating={rating}
            readonly
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
