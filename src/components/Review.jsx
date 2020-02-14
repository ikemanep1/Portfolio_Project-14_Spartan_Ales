import React from "react";
import PropTypes from "prop-types";

function Review(props){
  const review = {
    width: "60%",
    backgroundColor: "#4e504d",
    padding: "20px",
    justifyContent: "center",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "10px",
    border: "3px solid #ff751a",
    color: "#ffedcc",
  }
  return (
    <div style={review}>
      <p>{props.name} had this to say:</p>
      <ul>
      <li>rating: {props.rating}</li>
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
