import React from "react";
import PropTypes from "prop-types";

function Review(props){
  return (
    <div className="ReviewSingular">
    <ul>
      <li>{props.name}</li>
      <li>{props.rating}</li>
      <li>{props.content}</li>
    </ul>
    </div>
  );
}

Review.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.string,
  content: PropTypes.string,
};


export default Review;
